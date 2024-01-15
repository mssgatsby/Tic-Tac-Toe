export default function GameOver({ winner, rematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>

      {winner ? <p>{winner} won!</p> : <p>It's draw</p>}
      {/* {!winner && <p>It's draw</p>} */}
      <p>
        <button onClick={rematch}>Rematch</button>
      </p>
    </div>
  );
}
