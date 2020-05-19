import React, { Component } from 'react';
import Place from './Place'

class Game extends Component {
    constructor () {
        super();
        this.state = {
            userTurn: true,
            board: [['x', 'a', 'b'],
                    ['', '', 'c'],
                    ['', 'd', '']],
        }
    }
    
    render() {
        return (
            <div>
                <Place value={this.state.board[0][0]} />
            </div>
        );
    }
}

export default Game;