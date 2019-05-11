import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-4">Clicky Game</div>
                        <div className="col-4">You Guessed Correctly!</div>
                        <div className="col-4">Score: 1 | Top Score: 2</div>
                    </div>
                </div>
            </nav>);
    }
}

export default Navbar;