import React from "react";

const ListaPessoas = ({pessoas}) => {
  const arr = pessoas;

  return (
    <ul>
      { arr.map((val, index) =>
          <li key={index}>{val}</li>)
      }
    </ul>
  );
}

export default ListaPessoas;