import React from "react";

function Todo({ arr, array, setArray, index }) {
  var newArray;

  const remove = () => {
    newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  return (
    <div className="Todo">
      <p onClick={remove}>{arr}</p>
    </div>
  );
}

export default Todo;
