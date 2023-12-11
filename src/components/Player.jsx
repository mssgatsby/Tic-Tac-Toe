import { useState } from "react";

export default function ({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function Edit() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          ></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={Edit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
