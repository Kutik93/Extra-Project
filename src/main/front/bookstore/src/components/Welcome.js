import React, {Component} from 'react';
import { } from 'react-bootstrap';

export default class Welcome extends  Component {
    render() {
           return (

                          <div className="bg-dark text-white" align="center">
                            <div className="container">
                              <h1 className="display-4">Welcome to your online collection of books.</h1>
                              <p className="lead">A room without books is a body without soul. </p>
                              <footer className="blockquote-footer"> Cyceron </footer>
                            </div>
                          </div>
                  );
    }
}
