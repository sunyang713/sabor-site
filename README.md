[![Stories in Ready](https://badge.waffle.io/sunyang713/sabor-website.png?label=ready&title=Ready)](https://waffle.io/sunyang713/sabor-website)
[![Build Status](https://travis-ci.org/sunyang713/sabor-website.svg?branch=master)](https://travis-ci.org/sunyang713/sabor-website)

# Sabor's Website

minimum, barebones client-side-only javascript application. constructed through careful research and inclusion of only the top and most necessary packages.

Lol jk this is has a buttload of packages which is really frustrating.



# Setup

Install node.js with which npm will come prepackaged: https://nodejs.org/en/

Install npm packages.
```
$ npm install
```
Start the app.
```
$ npm start
```

This will run the webpack development server.

Open `http://localhost:8080`.

# Development

Make a new branch. Name your branch the name of your new intended feature, prefixed with your initials and a slash.
```
$ git checkout -b js/my-new-feature
```

Make your changes. `commit` frequently. `git add`'s `-p` option is encouraged (interactive add). Commit messages should be in the imperative present tense.
```
$ git add -p
...
$ git add ./stuff/morestuff/my-untracked-file
...
$ git commit -m "Implement my new WORKING sub-feature-1"
...
$ git commit -m "Implement my new WORKING sub-feature-2"
```


When finished, push to a NEW branch on github.
```
$ git push -u origin js/my-new-feature
```

Make a pull request, tag someone in a comment or poke someone on slack for review. Merge and delete branch when done.

# Deployment
When you've thoroughly tested all of your new features, and you're confident you want to deploy, you'll need to do a couple things. First you need to set the environment variable `UNI` to be your UNI. Then you need to set the environment variable `PASSWORD` to your password.
```
$ export UNI=abc1212
$ export PASSWORD=mY_v3rY_g00d_P45SWoRD
```
*NEVER commit and push code with your password in it.*

Execute the deployment script.
```
$ npm run deploy
```




# Architecture

## Core Technology
 - ECMAScript 2015 (ES6) syntax
 - React.js

The client is written primarily in *React.js*. Some additional utilities and modules:
 - react-fadethrough (made my me!!)
 - react-router (along with history)

The (pseudo) FLUX Architecture is managed with *Redux*. Additional utilities and modules:
 - react-redux
 - thunk
 - react-router-redux
 - redux-devtools

A few standalone modules utilities and modules:
 - jquery
 - moment
 - immutable (used in isolation with the redux system, specifically the reducers, ideally soon to be deprecated)


## Styling
"I can throw in some styles rite quick at the end, easy." Never make the mistake of making styling an after-thought. Styling is just as, if not more, time-consuming as core implementation.

*Stylus* is the chosen preprocessor. It's objectively better than Sass or Less.

*Bootstrap* is the CSS framework. *React-Bootstrap* is also installed to integrate the javascript portion of bootstrap as modules.

An extremely important opinionated pattern I've established is global vs modulated styles. Stylus stylesheets can only be used with *react-css-modules* and will be namespaced (isolated) to the component into which they were imported. Standard CSS stylesheets can be used as usual, with all of its frustrating idiosyncrasies. This is intentional to promote more sane object oriented CSS. However, global utility styles are definitely useful, which is why I've still allowed it.



## Suggested dev tools
Sublime Text 3 is recommended with package control installed. Here are some good packages:
 - babel snippets.
 - stylus snippets
 - eslint





