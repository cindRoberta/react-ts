import React, { useState } from "react";

const FormularioAdicionarPessoa = ({addNego}) => {
  const [person, setPerson] = useState<string>('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    addNego(person);
    setPerson('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={person}
        placeholder="Adicionar novo contato"
        onChange={e => setPerson(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
    );
};

export default FormularioAdicionarPessoa;