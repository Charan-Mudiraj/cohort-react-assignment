import { useEffect } from "react";
import "./App.css";

function LinkBtn({ num }) {
  return (
    <a href={"/" + num} id="link-btn">
      {num}
    </a>
  );
}
export default function Links() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <div id="links">
      {[1, 2, 4, 5, 6].map((n, i) => (
        <LinkBtn num={n} key={i} />
      ))}
    </div>
  );
}
