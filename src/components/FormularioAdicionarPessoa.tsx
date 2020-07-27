import React, { useState } from "react";

const FormularioAdicionarPessoa = () => {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Adicionar novo contato"
        onChange={e => e.target.value}
        value={person} />
      <button type="submit">Add</button>
    </form>
    );
};

export default FormularioAdicionarPessoa;