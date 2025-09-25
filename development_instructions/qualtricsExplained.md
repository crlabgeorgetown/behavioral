# Qualtrics Integration Guide

> Documentation: [Home - README](../README.md) • [Task Architecture](taskFunctionality.md) • [Creating New Tasks](newTask.md) • [Component Examples](componentExamples.md) • [Qualtrics Integration](qualtricsExplained.md) • [Git & Setup](gitHub.md) • [Trial Screen Guide](trialScreen.md)

This guide covers how to integrate behavioral tasks with Qualtrics surveys, including setup, testing, and deployment considerations.

---

## Overview

The behavioral task system is designed to work seamlessly with Qualtrics by bypassing the standard Qualtrics UI. Tasks run as JavaScript applications that collect data and submit it directly to Qualtrics variables.

> Warning (Preview vs Anonymous link): Do not use Qualtrics “Preview” to test the task. Always use the survey’s Anonymous Link so that the deployed GitHub Pages bundle is loaded.

---

## 1. Survey Setup

### Creating a New Survey
- **No master template**: Each survey is created independently, though you may copy surveys that share similar variables.
- **Survey structure**: Minimal Qualtrics UI - the task handles the entire participant experience.
- **Script integration**: Tasks are embedded using Qualtrics' JavaScript question type.

### Basic Survey Structure
1. **Task page**: Contains the JavaScript that loads and runs the behavioral task
2. **Thank you page**: Confirmation that data was submitted successfully

---

## 2. Task Integration Script

### Standard Integration Pattern
Use this script template in a "JavaScript" question type in Qualtrics:

```javascript
Qualtrics.SurveyEngine.addOnload(function()
{
    d3.csv('https://crlabgeorgetown.github.io/behavioral/static/data/YOUR_VARIANT.csv').then((data) => {
        new YOUR_TASK.Task(data, this, 'VARIANT_KEY')
    })
});

Qualtrics.SurveyEngine.addOnReady(function()
{
    // Additional setup if needed
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
    // Cleanup code if needed
});
```

Replace:
- `YOUR_VARIANT.csv` with your CSV filename in `static/data/`
- `YOUR_TASK.Task` with the correct namespace (e.g., `task.Task` for the consolidated bundle)
- `VARIANT_KEY` with the exact key registered in `task/variants/index.js`

---

## 3. Data Collection & Variables

### Variable Naming
- **Consistency**: Variable names should match the task's internal naming conventions
- **Task-specific**: Each task defines its own variable structure through the Trial class `columns` getter
- **Qualtrics mapping**: Variables are automatically mapped based on the task's export configuration

### Data Submission Process
1. **Participant interaction**: Participants complete trials within the task interface
2. **Submit button**: Participants press "Submit" to finalize their session
3. **Automatic submission**: Data is automatically sent to Qualtrics variables
4. **Confirmation**: Participants should wait for the Qualtrics "Thank you" message before closing the tab

### Data Format
- **Semicolon separation**: Multiple trial responses are concatenated with `;` separators
- **Variable consistency**: Each variable contains all responses for that measure across trials
- **Example**: `responses = "Y;N;Y;Y"`, `rt_ms = "520;610;490;560"`

---

## 4. Testing & Deployment

### Deployment checklist
- [ ] Code pushed to `main`
- [ ] GitHub Actions “Build and Deploy” shows a green check
- [ ] CSV accessible at its GitHub Pages URL
- [ ] Task loads via the survey’s Anonymous Link (not Preview)
- [ ] Submits and reaches Qualtrics Thank You screen

### Testing Workflow
1. **Local preview**: Test task screens locally during development
2. **Full integration**: Complete testing requires Qualtrics integration (responses are tied to Qualtrics)
3. **GitHub deployment**: Push to main branch triggers GitHub Actions
4. **Deployment time**: Typically takes ~1.5 minutes for GitHub Pages to update
5. **Verification**: Check GitHub Actions tab for successful deployment before testing

---

## 5. Technical Specs (quick)
- Desktop focus, all browsers
- Minimal dependencies; client-side timing
- One submission to Qualtrics at end-of-task

---

## 6. Recommended screenshots (for future)
If you capture screenshots for this guide, these are most helpful:
- Qualtrics: Adding a JavaScript question and where to paste the script
- Qualtrics: Where to get the Anonymous Link
- GitHub Actions: Successful “Build and Deploy” run (green check)
- Browser DevTools: Network panel showing CSV loaded from GitHub Pages

---

## 7. Troubleshooting
- CSV 404 or CORS: Check the exact GitHub Pages URL and that the commit has deployed
- Script not updating: Wait for Actions to finish; hard-refresh browser (or open in a private window)
- Data not arriving in Qualtrics: Ensure Submit is clicked and wait for Thank You page
- Wrong variant: Check string key against `task/variants/index.js`
