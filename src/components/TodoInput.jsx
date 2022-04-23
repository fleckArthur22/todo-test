import React, { useState } from "react";

function TodoInput({ inp, setInp, array, setArray }) {
  const submit = (e) => {
    e.preventDefault();

    setArray([...array, inp]);
    setInp("");
  };

  console.log(array);

  return (
    <div className="TodoInput">
      <form action="" onSubmit={submit}>
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoInput;
