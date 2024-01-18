import "./styles.css";

function ColorBtn({ color, onClick }) {
  const btnColor = color != "Default" ? color.toLowerCase() : "orange";
  return (
    <div
      className="clrBtn"
      style={{ backgroundColor: btnColor, color: "white" }}
      onClick={onClick}
    >
      {color}
    </div>
  );
}
function ColorsDiv() {
  const colors = [
    "Red",
    "Yellow",
    "Black",
    "Purple",
    "Green",
    "Blue",
    "Default",
  ];
  function changeClr(e) {
    const newBGColor = e.target.style.backgroundColor;
    document.body.style.backgroundColor = newBGColor;
  }
  return (
    <div id="colors-div">
      {colors.map((clr, i) => (
        <ColorBtn key={i} color={clr} onClick={(e) => changeClr(e)} />
      ))}
    </div>
  );
}
export default function BChanger() {
  return (
    <div className="colors">
      <ColorsDiv />
    </div>
  );
}
