# Getting Started 

git clone https://github.com/rameshmeesam/react-frontend-portal.git

## Available Scripts

In the project directory, you can run:
### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm test`

Build 

### `npm run build`

Builds the app for production to the `build` folder.\

host in github pages

Open package.json file then add below 

  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://gitname.github.io/react-gh-pages",
  "private": true,

Add deployment script

"scripts": {
    "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
}

### `npm run deploy`
### `run deploy -- -m "Deploy React app to GitHub Pages"`

Configure GitHub Pages
Navigate to the GitHub Pages settings page
In your web browser, navigate to the GitHub repository
Above the code browser, click on the tab labeled "Settings"
In the sidebar, in the "Code and automation" section, click on "Pages"
Configure the "Build and deployment" settings like this:
Source: Deploy from a branch
Branch:
Branch: gh-pages
Folder: / (root)
Click on the "Save" button