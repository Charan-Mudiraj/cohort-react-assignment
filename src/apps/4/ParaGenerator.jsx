import { useState } from "react";
import "./styles.css";
import { generate, count } from "random-words";

export default function ParaGenerator() {
  const [len, setLen] = useState(0);
  const [para, setPara] = useState("");
  return (
    <div id="p-gen">
      <b>Para Generator</b>
      <div>
        <input
          type="text"
          placeholder="Enter Number of Words"
          onInput={(e) => {
            setLen(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            if (len >= 2 && len <= 14) {
              setPara(
                generate({
                  exactly: 100,
                  join: " ",
                  minLength: len,
                  maxLength: len,
                })
              );
            } else {
              alert("input a number b/w 2 and 14");
            }
          }}
        >
          Generate
        </button>
      </div>
      <p>Input: [2-14]</p>
      <div id="para">{para}</div>
    </div>
  );
}
