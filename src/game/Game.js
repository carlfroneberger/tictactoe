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
            // coordinates like (i, j)
            // i is down
            // j is across
            board: [['', '', ''],
                    ['', '', ''],
                    ['', '', '']],
        }
    }

    // Checks for a win on the most recent move
    // i is most recent move placement for down
    // j is most recent move placement for across
    checkWin = (i, j) => {
        if (this.checkRow(i)) return true;
        if (this.checkCol(j)) return true;
        if (this.checkDiag(i, j)) return true;
        return false;
    }

    checkRow = (i) => {
        const { board } = this.state;
        if (board[i][0] === '') return false;
        if (board[i][0] === board[i][1] && board[i][0] && board[i][2]) return true;
        return false;
    }

    checkCol = (j) => {
        const { board } = this.state;
        if (board[0][j] === '') return false;
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j]) return true;
        return false;
    }

    checkDiag = (i, j) => {
        const { board } = this.state;
        if (board[1][1] === '') return false;
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) return true
        if (board[0][2] === board[1][1] && board[0][0] === board[0][2]) return true
    }

    doMove = (i, j) => {
        const { userTurn, isOver, board } = this.state;
        if (isOver) return;
        if (board[i][j] !== '') return;
        if (userTurn) this.setSquare(i, j, 'X');
        else this.setSquare(i, j, 'O');
        if (this.checkWin(i, j)) this.setState({isOver: true});
    }

    setSquare = (i, j, mark) => {
        const { userTurn, board } = this.state;
        board[i][j] = mark;
        this.setState({
            board,
            isWinner: userTurn,
            userTurn: !userTurn,
        }); 
    }

    render() {
        const { isOver, isWinner } = this.state;
        return (
            <div>
                { isOver &&
                  <div>There is a winner { isWinner ? 'you' : 'not you lmao'}</div>
                }
                <div className="gameContainer">
                    <Place value={this.state.board[0][0]} onChosen={() => this.doMove(0, 0)} />
                    <Place value={this.state.board[0][1]} onChosen={() => this.doMove(0, 1)} />
                    <Place value={this.state.board[0][2]} onChosen={() => this.doMove(0, 2)} />
                    <Place value={this.state.board[1][0]} onChosen={() => this.doMove(1, 0)} />
                    <Place value={this.state.board[1][1]} onChosen={() => this.doMove(1, 1)} />
                    <Place value={this.state.board[1][2]} onChosen={() => this.doMove(1, 2)} />
                    <Place value={this.state.board[2][0]} onChosen={() => this.doMove(2, 0)} />
                    <Place value={this.state.board[2][1]} onChosen={() => this.doMove(2, 1)} />
                    <Place value={this.state.board[2][2]} onChosen={() => this.doMove(2, 2)} />
                </div>
            </div>
        );
    }
}

export default Game;