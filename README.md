# Setup

1. Install git based on the operating system you use. Instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. In a local directory of your choosing, run the following command from your terminal:
```sh
git clone https://github.com/crlabgeorgetown/behavioral.git
```
Or, download the zip archive from github and unzip it. 
![alt text](./docs/code_archive.png)

# Running

1. To test a task locally, from the behavioral directory, run:
```sh
open lexicalDecision/writtenIndex.html
```

# Development

1. This project uses webpack for organizational purposes. It bundles together modules that depend on each other and produces a bundle.js file that is embedded in a Qualtrics question. Without it, it would be cumbersome and error prone to add all the modules necessary for the tasks to work as script tags. You can read more about webpack basic concepts [here](https://webpack.js.org/concepts/). However, in order to use webpack, you need to install Node from [here](https://nodejs.org/en).
1. run: 
```sh
npx webpack --watch
```
1. Webpack is now listening for changes made to the Javascript code, and updating the bundle.js file immediately. 
1. Bundles are deployed to github pages after pushing to the `main` branch.