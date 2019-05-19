# Hello Bootstrap

In this activity, we will utilize Bootstrap CSS and render components utilizing Bootstrap classes.

## Instructions

* Replace your application's `src` folder with [Unsolved/src](Unsolved/src).

* Add a Bootstrap CDN to the head of your React application's `index.html` file inside `public/index.html`.

* Inside of the `src/components` folder, create a brand new file named `HelloBootstrap.js`. Add code to this file to accomplish the following:

  * It should render a [Bootstrap Navbar](https://getbootstrap.com/docs/3.3/components/#navbar), followed by a [Bootstrap Jumbotron](http://getbootstrap.com/docs/3.3/components/#jumbotron), and lastly a [Bootstrap Panel](http://getbootstrap.com/docs/3.3/components/#panels).

  * Set the default export of this file to be your `HelloBootstrap` component.

* Update the `src/App.js` file so that it imports the `src/components/HelloBootstrap.js` file. Render the `HelloBootstrap` component instead of the paragraph that is currently being rendered.

### Hints

* In order to return separate JSX elements from a function, all of the higher level elements need a single parent, e.g., usually a `div`.

* All JSX tags must either have an adjacent tag or else have a self-closing forward slash.

* `className` must be used to describe an element's `class` property since `class` is a reserved word in JavaScript.

* Remember to import the `react` library in any file where JSX is utilized. Inspect some of the other files provided with the starter code if you're having difficulty remembering the syntax for this.

### Bonus

* Instead of having all of your Bootstrap code inside of a single component, create three separate components for the Navbar, Jumbotron, and Panel. Render these components inside of the App component.
