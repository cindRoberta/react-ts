import React from "react";

const PeopleList = (props) => {
  const arr = props.pessoas;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );

  return <ul>{listItems}</ul>;
}

export default PeopleList;