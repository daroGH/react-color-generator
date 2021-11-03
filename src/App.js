import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // .all(10) mean divided the value by 10
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return;
  <>
    <section className="container">
      <h3>color generator</h3>
      {/* create submit form and take input from it */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f12025"
          // the `` call template string
          className={`${error ? "error" : null}`}
        />
        <button className="btn" type="submit">
          submit
        </button>
      </form>
    </section>
    <section className="color">
      <h4>List goes here</h4>
      {list.map((color, index) => {
        {
          /* ... is object spread operator */
        }
        return <SingleColor key={index} {...color} index={index} />;
      })}
    </section>
    ;
  </>;
}

export default App;
