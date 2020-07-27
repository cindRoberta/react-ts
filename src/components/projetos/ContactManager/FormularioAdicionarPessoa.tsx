import React, { useState } from "react";

const FormularioAdicionarPessoa = () => {
  const [person, setPerson] = useState<string>('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" value={person}
        placeholder="Adicionar novo contato"
        onChange={e => setPerson(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
    );
};

export default FormularioAdicionarPessoa;