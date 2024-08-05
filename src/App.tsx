import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Yacht!</title>

        <div className="content-wrapper">
          <div id="logo">Yacht!!</div>

          <div className="game-box">

            <table className="scoreboard">
              <thead>
              <tr>
                <th>Categories</th>
                <th>Player 1</th>
                <th>Player 2</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Aces</td>
                <td id="player1-aces"></td>
                <td id="player2-aces"></td>
              </tr>
              <tr>
                <td>Twos</td>
                <td id="player1-twos"></td>
                <td id="player2-twos"></td>
              </tr>
              <tr>
                <td>Threes</td>
                <td id="player1-threes"></td>
                <td id="player2-threes"></td>
              </tr>
              <tr>
                <td>Fours</td>
                <td id="player1-fours"></td>
                <td id="player2-fours"></td>
              </tr>
              <tr>
                <td>Fives</td>
                <td id="player1-fives"></td>
                <td id="player2-fives"></td>
              </tr>
              <tr>
                <td>Sixes</td>
                <td id="player1-sixes"></td>
                <td id="player2-sixes"></td>
              </tr>
              <tr>
                <td><b>Subtotal</b></td>
                <td id="player1-sub"></td>
                <td id="player2-sub"></td>
              </tr>
              <tr>
                <td>Bonus +35</td>
                <td id="player1-bonus"></td>
                <td id="player2-bonus"></td>
              </tr>
              <tr>
                <td>Choice</td>
                <td id="player1-choice"></td>
                <td id="player2-choice"></td>
              </tr>
              <tr>
                <td>4 of a Kind</td>
                <td id="player1-four-of-a-kind"></td>
                <td id="player2-four-of-a-kind"></td>
              </tr>
              <tr>
                <td>Full House</td>
                <td id="player1-full-house"></td>
                <td id="player2-full-house"></td>
              </tr>
              <tr>
                <td>Small Straight</td>
                <td id="player1-small-straight"></td>
                <td id="player2-small-straight"></td>
              </tr>
              <tr>
                <td>Large Straight</td>
                <td id="player1-large-straight"></td>
                <td id="player2-large-straight"></td>
              </tr>
              <tr>
                <td>Yacht</td>
                <td id="player1-yacht"></td>
                <td id="player2-yacht"></td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td><b>Total</b></td>
                <td id="player1-total"></td>
                <td id="player2-total"></td>
              </tr>
              </tfoot>
            </table>

            <canvas className="yachtCanvas"></canvas>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
