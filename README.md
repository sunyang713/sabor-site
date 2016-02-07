[![Stories in Ready](https://badge.waffle.io/sunyang713/sabor-website.png?label=ready&title=Ready)](https://waffle.io/sunyang713/sabor-website)
[![Build Status](https://travis-ci.org/sunyang713/sabor-website.svg?branch=master)](https://travis-ci.org/sunyang713/sabor-website)

# Sabor's Website

Minimum, barebones client-side-only pseudo-dynamic (but really static) javascript application. constructed through careful research and inclusion of only the top and most necessary packages.

Lol jk this is has a buttload of packages which is really frustrating.

New webmaster of Sabor? [Start here!](https://github.com/sunyang713/sabor-website/wiki/Getting-Started)


# Setup


Install npm packages and run the `start` script.
```bash
$ npm install
$ npm start
```

This will run the webpack development server. Open `http://localhost:8080`.

# Development
[Standard](https://github.com/sunyang713/sabor-website/wiki/Getting-Started#making-changes)

# Deployment
[How to deploy](https://github.com/sunyang713/sabor-website/wiki/Deployment)


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





