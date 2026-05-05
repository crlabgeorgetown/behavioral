import { init } from '@plausible-analytics/tracker'

init({
    domain: 'crlabgeorgetown.github.io/behavioral/task/public/html/publicTaskHub.html',
})

const SESSION_ID_KEY = 'darn_session_id';

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
    const payload = {
      session_id: getSessionId(),
      test_name: props.testName || document.title,
      version: props.version || '1.0',
      path: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...props
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
  cvsDownloaded:     (meta = {}) => trackEvent('csv_downloaded',       meta),
};