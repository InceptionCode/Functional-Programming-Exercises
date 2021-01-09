# Functional-Programming-Exercises
This is a repository of my personal exercises and projects for Functional Programming as well as other JS practice files.
I am currently on the journey of becoming a better programmer (and not a noob) and figured it was time to explore functional programming.
The collection of exercise will be based on FP learning materials including:

- [Kyle Simpson's functional light book](https://github.com/getify/Functional-Light-JS)
- [Brian Lonsdorf's Mostly Adequate Guide to Functional Programming.](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/)
- [Eric Elliot's Programming JavaScript Applications.](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/)
- etc...

I encourage anyone to fork this repo and learn along with me or make changes of your own. I am a fairly new programmer so some exercises will be "kind of" practical. I have also included very meaningful exercises, projects and examples. Look over them carefully and try to grasp the FP concepts.

### Update:

I can't believe it has been 4 years sense my last update to this. I definitely want to continue this repo and will add more short projects that involve:
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview) "A library for composing asynchronous and event-based programs by using observable sequences". Lodash for events... literally.

- React & Angular (maybe)

## Usage

All files are completely JS so, I would prefer that you had Node (latest version), that way all example code can be run on Node. However, no NPMs or Node is necessary (node_modules, Ramda.js, Ramda-fantasy, and Flow.js have been recently installed). The majority of the code should be able to run in the browser playgrounds such as Codepen, JSFiddle etc....

- All files are organized by the Functional Programming resources root folder and the chapters associated.
- All exercise and project files will be associated to their respective folders.
- Carefully review code in files in order to see a working example. Some return statements must be changed to console.log's
- I will try my best to leave a /* NOTE */ which should give instructions on how to test parts of the code.
- To run the files start at the root of the file in your terminal and run $ node [ name of resource ] / [ chp#.js ] The # in chp means the chapter number.
- Some resources are structured differently depending on what folder you are in.
- In order to view working examples and projects I highly recommend installing all listed dependencies and config webpack properly then run "webpack-dev-server" at the root of the repo. You should have the ability to see all files and view html files as well.
- If you do not have Node copy the code and paste it into your favorite JS playground online.
- Or however, you wish to run the JS files is completely up to you.
- I have included a few more helper tools that depend on Babel to be compiled into vanilla JS. The compiled files will be in their own separate "build" folder inside their respective directories.

If you wish to install these tools I encourage you to look into their documentation and follow along with the entire install and build process.

## List of Dependencies
- [Flow.js](https://flowtype.org/) (requires .flowconfig file)
- [Ramda.js](http://ramdajs.com/)
- [Ramda-fantasy](https://github.com/ramda/ramda-fantasy)
- [Babel](https://babeljs.io/) (requires extra plugins and .babelrc file)
- [Webpack](https://webpack.github.io/docs/)
- [Node-SASS](https://github.com/sass/node-sass)
- [Style-loader](https://www.npmjs.com/package/style-loader)

## Resources

Besides the books I have marked out above I suggest trying out a true functional language. My pick would be [Elm](http://www.elm-lang.org/). This is a great way to learn the benefits, architecture and understanding behind FP.
If you take the Elm path (which I highly suggest you do) check out my repo on elm, ["Elm-training"](https://github.com/InceptionCode/elm-training).
To go even deeper and get a great sense of FP and the power of Elm, checkout James Moore's [Elm Course for Beginners](http://courses.knowthen.com/p/elm-for-beginners). This will definitely jump start you in FP and Elm concepts.
I will also leave you with a much better list of resources for JS in general https://github.com/javascript-society/javascript-path

## Issues
Send all request, questions and complaints as "Issues". For example if you want to see my .babelrc file send a request for it as an "Issue".
