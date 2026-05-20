const SESSION_ID_KEY = 'darn_session_id';

if (typeof window !== 'undefined' && !window.__darnPlausiblePrintTrackingInstalled) {
  window.__darnPlausiblePrintTrackingInstalled = true;
  window.addEventListener('beforeprint', () => {
    trackEvent('print_dialog_opened');
  });
}

function getSessionId() {
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
}

function trackEvent(eventName, props = {}) {
  try {
    const {
      testName,
      test_name,
      path,
      pagePath,
      page_path,
      session_id,
      timestamp,
      version,
      ...rest
    } = props;

    const payload = {
      session_id: session_id || getSessionId(),
      test_name: testName || test_name || document.title,
      version: version || '1.0',
      path: path || pagePath || page_path || window.location.pathname,
      timestamp: timestamp || new Date().toISOString(),
      ...rest
    };

    if (typeof window.plausible === 'function') {
      window.plausible(eventName, { props: payload });
    }
    // If offline or script blocked — silently does nothing
  } catch (e) {
    // Never let analytics crash the experiment
  }
}

// Named exports for each event
export const Analytics = {
  testStarted:       (meta = {}) => trackEvent('test_started',        meta),
  testCompleted:     (meta = {}) => trackEvent('test_completed',       meta),
  reportGenerated:   (meta = {}) => trackEvent('report_generated',     meta),
  pdfDownloaded:     (meta = {}) => trackEvent('pdf_downloaded',       meta),
  printDialogOpened: (meta = {}) => trackEvent('print_dialog_opened',  meta),
  csvDownloaded:     (meta = {}) => trackEvent('csv_downloaded',       meta),
};