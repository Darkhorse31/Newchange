import React from "react";

function App() {
  const [handle, setOver] = React.useState(false);
  const [name, setOn] = React.useState(" ");
  const [heading, Setheading] = React.useState(" ");

  let hover = () => {
    setOver(true);
  };
  let Out = () => {
    setOver(false);
  };
  let change = (event) => {
    setOn(event.target.value);
  };
  let changing = () => {
    Setheading(name);
  };

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Username"
          // value={name}
          onChange={change}
        />

        <button
          type="submit"
          style={{ background: handle === true ? "black" : "white" }}
          onMouseOver={hover}
          onMouseOut={Out}
          onClick={changing}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
