Among other things, webpack allows us to compile Node modules into static modules which can be used in the web app you are developing.

npm init

npm i react react-dom

npm i --save-dev webpack webpack-dev-server webpack-cli

npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

Add scripts to the package.json to run web pack. For example, 

  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },

create webpack.config.js. This is where we define the inputs and outputs webpack uses.

create .babelrc


==== Questions

This seems to work, although I have plenty of questions I am working through.


I vaguely (generally) understand that Babel is a transpilier, responsible for taking all of the newest features of JavaScript, and "compiling" it into a version of Java Script that can be used with "older browsers".

I get the concept. There are details I have questions on.

1) I vaguely understand that a Babel "preset" is Babel's term for how it is extended to handle different language features, such a JSX, etc. I don't fully understand the difference between a "Babel plugin" and a "Babel preset". I suspect they are related.

On a related topic, I've heard it said Babel is required if you are using anything from ES6, TypeScript, JSX, etc. If that is accurate, does that possibly imply no company creating a web app today choose to create an {ES6, TypeScript, JSX} app does so without also using Babel?

Stated differently: At which point does a company decide Babel isn't required becaue the Browser's they are targeting already support all of the Java Script they need?

2) In this project, I have installed two presets: babel-preset-env and babel-preset-react. I understand that the react preset is to handle JSX, which seems clear enough. 

I don't understand the "env" preset. I've seen docs that describe it as a mechanism that magically figures out what level of Java Script your browser is capable of, and just doing whatever transpiling is necessary.

I am guessing this implies I somehow need to inform "env" preset which browsers (and versions) I am targeting, probably via some configuration of some kind, probably in .babelrc. I guess it likely has some default browsers it supports without configuration. 

On a related topic, I've also seen, where the env preset is babel's latest way to replace yearly releases of Java Script. Presumably this implies the env preset is the magical way it handles whatever new version of Java Script the developer wishes to use, and translates it into whatever browsers the developer is targeting. 

3) I have seen in some projects, where babel configuration is performed in files such as package.json. In my case, I am using .babelrc. Is this typical? 

4) For development purposes, I am guessing it is sometimes desirable to watch babel do its thing on a file by file basis?

5) I totally do not get the purpose of the babel-loading plugin or module or preset (whatever its called). I've googled around and haven't found any description of its purpose. I suspect
the babel-loader is tied directly to babel-react (and not useful elsewhere), but I have no clue.

6) I am still not totally clear on the differences between a dev and production. I mean, I get that in dev you want certain settings, and in production you want different settings. However, I don't yet fully understand the ramifications of --save-dev, or even webpack.config.js vs webpack.config.dev.js.

I get that --save-dev adds stuff to the "devDependencies" block in package.json, but I am still not entirely sure what that means, or even if in my case that implies I don't yet have a functional "production" build.

I've seen some examples where people use webpack.config.dev.js and webpack.config.js in the same project. 

7) I frequently get lost in the overloaded terms of bundle, module, component, plugin,
preset. One example: The HTML Webpack Plugin simplies the creation of HTML files to 
serve your bundles. What in the crap does "serve your bundles" mean in that context? I mean,
I generally get that HTML Webpack Plugin somehow generates an index.html for the build
output. 

Nevertheless, I still don't get what "module" means in that context. I am seeing at the top level of the webpack.config.js, the "module.exports". I am wondering what it might mean to have multiple modules.

8) Somewhat frustratingly as a newbie, I am seeing there are apparently multiple ways to accomplish the same thing when I look at different examples. Here is one example ...

This: 

	use: {
		loader: "babel-loader"
	}

vs this (which apparently does the same thing without the "use" wrapper object):

	loader: 'babel-loader',

Here is another example: 

        query: {
          presets: ['react', 'es2015']
        }

vs this in .babelrc

{
	"presets": ["env", "react"]
}

9) If you see anything else to point out, feel free. For one thing, I realize I don't yet have any css or scss in this prototype.

10) The usage of the property name "test:" is still a mystery to me.

Anyways ... those are just a few of my questions :-D