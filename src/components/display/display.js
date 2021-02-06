import React from "react";

function Display(props) {
  return (
    <div>
      <div>
        <h3>{props.categoryTitle}</h3>

        <div>
          <strong>Question:</strong>
          {props.question}
        </div>
        <p>
          <strong>For:</strong>
          {props.value}
        </p>
        <form onSubmit={props.updateScore}>
          <label>Answer</label>
          <input
            type="text"
            name=""
            onChange={props.handleChange}
            value={props.answer}
          ></input>
          <button>Submit</button>
        </form>

        <h3>Score: {props.score}</h3>
      </div>
    </div>
  );
}

export default Display;
