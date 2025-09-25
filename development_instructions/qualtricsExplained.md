# Qualtrics Integration Guide

This guide covers how to integrate behavioral tasks with Qualtrics surveys, including setup, testing, and deployment considerations.

---

## Overview

The behavioral task system is designed to work seamlessly with Qualtrics by bypassing the standard Qualtrics UI. Tasks run as JavaScript applications that collect data and submit it directly to Qualtrics variables.

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

### Key Components:
- **CSV URL**: Points to your task's data file on GitHub Pages
- **Task instantiation**: Creates the task with data, Qualtrics engine (`this`), and variant key
- **Variant key**: Must match exactly what's registered in `task/variants/index.js`

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

### Testing Workflow
1. **Local preview**: Test task screens locally during development
2. **Full integration**: Complete testing requires Qualtrics integration (responses are tied to Qualtrics)
3. **GitHub deployment**: Push to main branch triggers GitHub Actions
4. **Deployment time**: Typically takes ~1.5 minutes for GitHub Pages to update
5. **Verification**: Check GitHub Actions tab for successful deployment before testing

### Testing Considerations
- **No error handling**: Current system lacks comprehensive error handling
- **Dependencies**: Minimal dependencies used for broad compatibility
- **Legacy support**: Code designed to work across different systems and browsers

---

## 5. Technical Specifications

### Browser Requirements
- **Desktop focus**: Tasks designed for desktop/laptop screens
- **Compatibility**: Minimal dependencies ensure broad browser support
- **Qualtrics compatibility**: Follows Qualtrics' JavaScript requirements

### Performance Considerations
- **Local execution**: Script downloads and runs locally on participant's machine
- **Response timing**: Accurate response time measurement is prioritized
- **Data transmission**: Only final data is sent to Qualtrics (minimal bandwidth usage)

### Timing & Synchronization
- **Trial timing**: Each trial has its own timing parameters
- **Local processing**: All timing calculations happen client-side
- **Data submission**: Only occurs at task completion

---

## 6. Participant Management

### Participant ID
- **Lab assignment**: Participant IDs are assigned by the research lab
- **Task recording**: IDs are captured by the task and sent to Qualtrics
- **Testing**: Use `XXX` as participant ID for developer testing

### Data Tracking
- **Researcher responsibility**: Lab researchers handle participant tracking
- **Data export**: Researchers manage data export and analysis
- **Consistency**: Task data structure remains consistent across participants

---

## 7. Deployment & Maintenance

### Version Control
- **Code stability**: Tasks are designed to remain unchanged once deployed
- **Research consistency**: No modifications after deployment to maintain testing consistency
- **Single implementation**: Tasks are coded once and remain stable

### Access Management
- **Password protection**: Surveys are accessible to anyone with the password
- **Team collaboration**: Multiple researchers can access surveys as needed

### Update Process
- **Minimal changes**: Avoid modifications to deployed tasks
- **Research integrity**: Changes could affect data consistency across studies
- **Stability priority**: System designed for long-term stability

---

## 8. Troubleshooting

### Common Issues
- **GitHub Actions failure**: Don't test before successful deployment
- **Data not submitting**: Ensure participants wait for "Thank you" message
- **Script errors**: Check GitHub Pages deployment status
- **Variable mapping**: Verify variant key matches registry

### Debugging Steps
1. Check GitHub Actions for successful deployment
2. Verify CSV file accessibility
3. Confirm variant key registration
4. Test with anonymous survey link (not preview mode)
5. Wait full deployment time (~2 minutes) before testing

---

## 9. Best Practices

### Development
- Test locally first with sample data
- Use consistent variable naming
- Follow existing task patterns
- Document any custom modifications

### Deployment
- Always test via anonymous link, not preview
- Wait for GitHub Actions completion
- Verify data submission in Qualtrics
- Keep tasks unchanged after deployment

### Data Management
- Use consistent participant ID format
- Document any data export requirements
- Maintain task stability for research integrity
- Coordinate with lab researchers on data needs

---

This integration approach ensures reliable data collection while maintaining the flexibility needed for behavioral research tasks.
