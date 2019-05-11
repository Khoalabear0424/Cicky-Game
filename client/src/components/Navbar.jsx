import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const { currentScore, highScore, message } = this.props;

        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-4">Clicky Game</div>
                        <div className="col-4">{message}</div>
                        <div className="col-4">Score: {currentScore} | Top Score: {highScore}</div>
                    </div>
                </div>
            </nav>);
    }
}

export default Navbar;