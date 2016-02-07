[![Stories in Ready](https://badge.waffle.io/sunyang713/sabor-website.png?label=ready&title=Ready)](https://waffle.io/sunyang713/sabor-website)
[![Build Status](https://travis-ci.org/sunyang713/sabor-website.svg?branch=master)](https://travis-ci.org/sunyang713/sabor-website)

# Sabor's Website

Minimum, barebones client-side-only pseudo-dynamic (but really static) javascript application. constructed through careful research and inclusion of only the top and most necessary packages.

Lol jk this is has a buttload of packages which is really frustrating.

New webmaster of Sabor? [Start here!](#Getting-Started)

### Getting started

In order to be able to work on the website, you'll need to become familiar with a few things at minimum:
 - HTML/CSS
 - The UNIX Environment
The following is a basic runthrough of the two topics,

#### HTML
`HTML` stands for *hyper text markup language*. This is how website pages are 'programmed' or designed. A single file represents a single page - multiple files means multiple pages. `index.html` must be the name of your home page. Here is an example html file:

##### index.html
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="content">
      <h1>Welcome to Sabor's Website!</h1>
      <p>Sabor is Columbia University's First Latino Dance Troupe</p>
      <img src="./my-images-folder/team-photo.jpg"></img>
    </div>
  </body>
</html>
```
Any time you visit any website, google, facebook, Columbia.edu, your browser is downloading a file that looks like the one above. Your web-browser (chrome, safari, firefox) is then able to read the file and display the content with colors or whatever to you, the user. The angle bracketed characters surrounding the content are 'tags.' There are only a handful of tags that you really need to know, for example `<p>` is for simple text. `<h1>` is a 'heading' tag. `<div>` is just a virtual boxing tag (you'll use this a lot).

#### CSS
`CSS` stands for *Cascading Style Sheets*. `HTML` alone only defines organization and content. `CSS` allows you to add colors, create more sophisticated arrangments, adjust font styles, and much more. For example:


##### my-custom-styles.css
```css
.blue-stuff {
  font-color: blue;
}
.my-box {
  border: 1px dotted black;
  width: 500px;
  height: 200px;
}
```

##### index.html
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="content">
      <h1>Welcome to Sabor's Website!</h1>
      <p class="blue-stuff">Sabor is Columbia University's First Latino Dance Troupe</p>
      <div class="my-box">
        <p>Here is my box</p>
      </div>
      <img src="./images/team-photo.jpg"></img>
    </div>
  </body>
</html>
```

You then indicate with `class` which tags have which styles. You can combine styles too with `class="blue-stuff my-box"`. Styling is a whole world of its own, so be sure to set aside a lot of time on any project dedicated to it.


#### UNIX
Unix is a popular operating system, originally developed by Bell Laboratories in 1969, and written in the C programming language......

Blah blah, the best way to understand is to use it. If you have a Mac, this is easy, simply open your 'terminal' application (it's built-in). If you're on windows, what I like to do is take the laptop/computer outside and place it carefully in the woods. Then buy a mac.

Just kidding, download [git for windows](https://git-for-windows.github.io)

You can also follow the PC section of [this tutorial](http://learn.adicu.com/setup/) for a more involved setup.

In either case, what you're doing is preparing and starting the 'command prompt.' Before you could navigate your computer folders with pointing and clicking on images, you needed to move around via this command prompt. It might seem harder, but you'll get used to it very fast. In addition, the command prompt gives you many different commands that you wouldn't be able to perform otherwise.

Here are some basic commands. The `$` indicates the prompt, or where you will type. It's not what you type in. The stuff after `#` are just comments I'm making to explain the command, you wouldn't type this in either.

```bash
$ pwd            # "print working directory"
/home/users/Jonathan
$ cd Documents/  # "change directory" to Documents
$ pwd
/home/users/Jonathan/Documents/
$ ls             # list all the files in this directory
resume.pdf    essay2.docx    porn.txt    school-2016/
```

You basically only need to know `cd` and `ls`.


The remaining instructions for developing Sabor's website assumes you have reasonable familiarity with UNIX and HTML/CSS. The above briefing is not meant to be a tutorial for either topic, but simply to provide some context. There are a lot of good online tutorials, but in my opinion, following any online tutorial is exhausting and you forget everything within the day. You just gotta do it.





### Your first time
Now we can get started. You're going to download the entirety of the website to your computer so you can develop and work offline. You'll make your changes and test them incrementally. When you're ready and satisfied with your changes, you'll deploy it to the live website.

Use your command prompt and navigate to a location where you'll want to store the files.

```bash
$ cd ~/workspace/
```

Now you're going to use `git`.

Install node.js with which npm will come prepackaged: https://nodejs.org/en/



# Setup


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





