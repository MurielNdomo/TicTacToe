import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const PLAYER_X = 'X';
const PLAYER_O = 'O';

class Square extends React.Component {


    render() {
      const squareSymbol = this.props.squareSymbol;
      return (
        <li
         className={squareSymbol && squareSymbol.toLowerCase()}
         onClick={() => this.props.onClick()} 
         >
          {squareSymbol}
        </li>
        // <button className="square">
        //   {/* TODO */}
        // </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares: Array(this.props.numberOfColumns * this.props.numberOfRows).fill(null),
      }
    }

    resetBoard(){
      this.setState({
        squares: Array(this.props.numberOfColumns * this.props.numberOfRows).fill(null)
      })
    }

    playInSquare(squareNumber){
      // TODO: we should take the symbol player from user
      const squares = this.state.squares.slice();
      squares[squareNumber] = PLAYER_X;
      this.setState({squares});
    }

    renderSquare(squareNumber) {
      return <Square 
                key={squareNumber} 
                squareSymbol={this.state.squares[squareNumber]}
                squareNumber={squareNumber} 
                onClick={() => this.playInSquare(squareNumber)} 
      />;
    }


    renderSquares = () => {
        const {numberOfColumns, numberOfRows} = this.props;
        const squares = [];
        let squareNumber = 0;
        for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++){
            for( let colNumber = 0; colNumber < numberOfColumns; colNumber++){
                squares.push(this.renderSquare(squareNumber));
                squareNumber ++ ;
            }
        }
        return squares;
    }
  
    render() {
      const status = 'Next player: X';
      
      
      return (
        <React.Fragment>
        <h1>Tic-Tac-Toe (Jeu de morpions)</h1>
          <div className="status">{status}</div>
        <ul className="board-game">
          {this.renderSquares()}
        </ul>
        <button onClick={() => this.resetBoard()}>
          Réinitialiser
        </button>
        </React.Fragment>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="container">
            <Board numberOfColumns={4} numberOfRows={4} />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  