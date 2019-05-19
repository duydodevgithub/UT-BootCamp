# Babel Setup

## ES6 Compatibility

ES6 Compatibility Table: <http://kangax.github.io/compat-table/es6/>

* See which environments support which ES6 features! Node, browser, ewtc.

## Babel

Babel REPL: <https://babeljs.io/repl/>

* Allows you to see the conversion of ES6 -> ES5 real-time

VS Code Babel REPL Extension: <https://marketplace.visualstudio.com/items?itemName=t-sauer.vscode-babel-repl>

* Plugin for Babel REPL in VS Code

### Using the Babel CLI

```bash
npm install -g babel-cli babel-preset-env babel-preset-stage-2 && echo "alias bnode='babel-node --presets es2015,stage-2'" >> ~/.bash_profile
```

* In short, this allows us to use Babel to run scripts using ES6 using the command `bnode` in place of `node`. For example: `bnode script.js` instead of `node script.js`.

#### Installing Babel CLI

* `npm install -g babel-cli babel-preset-env babel-preset-stage-2` - Installs the `babel-cli` (and relevant presets) so that we can run our node scripts with `babel-node` and use the new ES6+ features.

  * This allows us to do `babel-node script.js --presets es2015,stage-2` to run our file written in ES6.

#### The Alias (Extra)

Writing out babel-node with the presets can get old quickly. Fortunately, we can alias commands in bash.

* `&& echo "alias bnode='babel-node --presets es2015,stage-2'" >> ~/.bash_profile`
  
  * `&&` means "if the first command completes without error, do the following
  
  * the code following `&&` adds the line `alias bnode='babel-node --presets es2015,stage-2` to your `.bash_profile` file.
  
  * `alias bnode='babel-node --presets es2015,stage-2` - the `alias` command allows you to create shorthands for commands. For example, we could just type `bnode script.js`, which would run `babel-node --presets es2015,stage-2 script.js`. This allows us to not have to type out the whole command each time.
