import React, { Component } from 'react';
import Place from './Place';
import './Game.css';

class Game extends Component {
    constructor () {
        super();
        this.state = {
            userTurn: true,
            isOver: false,
            isWinner: false,
            isLoser: false,
            // coordinates like (i, j)
            // i is down
            // j is across
            board: [['', '', ''],
                    ['', '', ''],
                    ['', '', '']],
        }
    }

    checkWin = (i, j) => {
        const { board } = this.state;
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) return true
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j]) return true
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) return true
        if (board[0][2] === board[1][1] && board[0][0] === board[0][2]) return true
        return false;
    }

    setSquare = (i, j) => {
        const { userTurn, isOver, board } = this.state;
        if (isOver) {
            return;
        }
        if (board[i][j] !== '') {
            return;
        }
        if (userTurn) {
            board[i][j] = 'X';
            this.setState({
                board,
                userTurn: !userTurn,
            }); 
        } else {
            board[i][j] = 'O';
            this.setState({
                board,
                userTurn: !userTurn,
            })
        }
    }
    
    render() {
        return (
            <div className="gameContainer">
                <Place value={this.state.board[0][0]} onChosen={() =>  this.setSquare(0, 0)} />
                <Place value={this.state.board[0][1]}  onChosen={() => this.setSquare(0, 1)} />
                <Place value={this.state.board[0][2]}  onChosen={() => this.setSquare(0, 2)} />
                <Place value={this.state.board[1][0]}  onChosen={() => this.setSquare(1, 0)} />
                <Place value={this.state.board[1][1]}  onChosen={() => this.setSquare(1, 1)} />
                <Place value={this.state.board[1][2]}  onChosen={() => this.setSquare(1, 2)} />
                <Place value={this.state.board[2][0]}  onChosen={() => this.setSquare(2, 0)} />
                <Place value={this.state.board[2][1]}  onChosen={() => this.setSquare(2, 1)} />
                <Place value={this.state.board[2][2]}  onChosen={() => this.setSquare(2, 2)} />
            </div>
        );
    }
}

export default Game;