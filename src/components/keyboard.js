import "./keyboard.scss";

export default function Keyboard(props) {
  const characterRows = [
    ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
    ["ENTER", "W", "X", "C", "V", "B", "N", "BACKSPACE"]
  ];

  return (
    <div className="keyboard-container">
      {characterRows.map((row, i) => {
        return (
          <div className="row-container" key={i}>
            {row.map((character, j) => {
              return (
                <div 
                  className="keyword-button" 
                  key={j}
                  onClick={() => props.onKeyPress(character)}
                  >
                  {character}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
