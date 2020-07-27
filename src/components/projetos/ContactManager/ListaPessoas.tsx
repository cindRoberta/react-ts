import React from "react";

const ListaPessoas = (props) => {
  const arr = props.pessoas;

  return (
    <ul>
      { arr.map((val, index) =>
          <li key={index}>{val}</li>) }
    </ul>);
}

export default ListaPessoas;