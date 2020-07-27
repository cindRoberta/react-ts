import React, { useState } from "react";

import FormularioAdicionarPessoa from "./FormularioAdicionarPessoa.tsx";
import ListaPessoas from "./ListaPessoas.tsx";

const GerenciadorContatos = ({pessoas}) => {
  const [contacts, setContacts] = useState(pessoas);

  function addPerson(name) {
    //setContacts(contacts.push(name));
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <FormularioAdicionarPessoa handleSubmit={addPerson} />
      <ListaPessoas pessoas={contacts} />
    </div>
  );
};

export default GerenciadorContatos;