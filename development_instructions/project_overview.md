# Behavioral Task System

> Note: This overview is now reflected in the root README.md. This file remains as a reference copy under development_instructions.

JavaScript platform for creating behavioral research tasks that integrate with Qualtrics surveys.

## Documentation

- [Task Architecture](taskFunctionality.md)
- [Creating New Tasks](newTask.md)
- [Component Examples](componentExamples.md)
- [Qualtrics Integration](qualtricsExplained.md)
- [Git & Setup](gitHub.md)
- [Trial Screen Guide](trialScreen.md)

## Setup

1. Install Node.js from [here](https://nodejs.org/en/)
2. Clone the repository:
```sh
git clone https://github.com/crlabgeorgetown/behavioral.git
```
3. Install dependencies:
```sh
npm install
```

## Running Tasks Locally

1. Start webpack in watch mode:
```sh
npx webpack --watch
```
2. Open any task HTML file:
```sh
open task/html/index.html
```
3. You can open any file ending in `.html` (e.g., `task/html/typingToDiction.html`)

## Creating New Tasks

See [Creating New Tasks](newTask.md) for detailed step-by-step guide. For UI components, see [Component Examples](componentExamples.md).

1. **Prepare stimuli** in `static/` folders
2. **Create CSV data file** in `static/data/`
3. **Create four core files**:
   - Variant class in `task/variants/`
   - Trial class in `task/trials/`
   - Trial screen class in `task/screens/trials/` (see [Trial Screen Guide](trialScreen.md))
   - HTML file in `task/html/`
4. **Register variant** in `task/variants/index.js`
5. **Test locally** before deployment

## Deployment to Qualtrics

See [Qualtrics Integration](qualtricsExplained.md) for detailed setup guide.

1. **Push to main branch** (triggers GitHub Actions)
2. **Wait ~1.5 minutes** for GitHub Pages deployment
3. **Create Qualtrics survey** with JavaScript integration:
```javascript
Qualtrics.SurveyEngine.addOnload(function()
{
    d3.csv('https://crlabgeorgetown.github.io/behavioral/static/data/YOUR_VARIANT.csv').then((data) => {
        new task.Task(data, this, 'VARIANT_KEY')
    })
});
```
4. **Test via anonymous link** (not preview mode)

## Important Rules

**DO NOT EDIT:**
- `task/task.js`, `task/orchestrator.js`, `task/sequenceNode.js`, `task/qualtricsClient.js`
- `dist/` folder (auto-generated)

For system architecture details, see [Task Architecture](taskFunctionality.md). For Git basics and VS Code workflow, see [Git & Setup (Beginner)](gitHub.md).