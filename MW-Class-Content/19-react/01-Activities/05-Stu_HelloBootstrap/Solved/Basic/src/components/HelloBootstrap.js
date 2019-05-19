import React from "react";

const HelloBootstrap = () => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">
            Project name
          </a>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div className="jumbotron">
      <h1>Your Project</h1>
      <p>
        Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris
        magna exercitation. Aliquip reprehenderit magna elit cillum adipisicing
        dolore aliquip velit. Ipsum ullamco nostrud tempor eu deserunt ipsum
        incididunt fugiat esse ipsum. Exercitation nostrud exercitation sit ex
        nostrud aliqua officia magna nostrud deserunt et esse eu deserunt. Non
        dolor consequat qui ea culpa tempor magna nulla consectetur est
        occaecat.
      </p>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        Non eu sit duis adipisicing esse incididunt ad proident.
      </div>
      <div className="panel-body">
        Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco.
        Commodo magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit
        nostrud incididunt ad adipisicing.Aliquip dolore commodo nostrud minim.
        Cillum do enim non ullamco. Commodo magna eu ex mollit sunt amet fugiat.
        In irure eu enim id ea sit nostrud incididunt ad adipisicing.
      </div>
    </div>
  </div>
);

export default HelloBootstrap;
