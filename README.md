## Getting Started


1. Install brew, paste the highlighted text into your terminal  `/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"`
2. `brew install node`
3. Install Git using brew, past the highlighted text in your terminal `brew install git`
4. open your terminal and make a new directory starting from your home  directory ( one way to get there is to run `cd ~`  then make a new directory by running `mkdir code`
5. go to the new directory by running `cd code`
6. `git clone [https://github.com/angelinaaziz/auralyze.git](https://github.com/angelinaaziz/auralyze.git)`
7. cd into the new repo `cd interview-genie-landing`
8. run `npm install` 
9. run `npm start`


Your browser should now open and show the app. Otherwise open http://localhost:3000/ in your browser. Editing files will automatically refresh the page.

### What to do next?

If you are new to React, you should watch a [basic React tutorial](https://www.youtube.com/results?search_query=react+tutorial) first.

If you know React, then most of the information you need is in the [Material-UI documentation](https://material-ui.com/getting-started/usage/).

You can go into [src/theme.js](/src/theme.js) and change the primary and secondary color codes at the top of the script to the values you like and some magic will happen.

## Deployment

If you are satisfied with the state of your website you can run:

```
npm run build 
```

It will create a folder named build with your compiled project inside. After that copy its content into your webroot and you are ready to go.

## Built With

* [Create-React-App](https://github.com/facebook/create-react-app) - Used to bootstrap the development
* [Material-UI](https://github.com/mui-org/material-ui) - Material Design components
* [React-Router](https://github.com/ReactTraining/react-router) - Routing of the app
* [Recharts](https://github.com/recharts/recharts) - Charting library I used for the statistics
* [Aos](https://github.com/michalsnik/aos) - Animations based on viewport
* [react-video-recorder](https://github.com/fbaiodias/react-video-recorder) - video recorder for question page
* [one-way-interview-practice]( https://github.com/Dinesh-Kalamegam/one-way-interview-practice) - base functionality for async video interview feature.
