import React, { useState } from "react";

import FormularioAdicionarPessoa from "./FormularioAdicionarPessoa.tsx";
import ListaPessoas from "./ListaPessoas.tsx";

const GerenciadorContatos = (props) => {
  const [contacts, setContacts] = useState(props.pessoas);

  return (
    <div>
      <FormularioAdicionarPessoa />
      <ListaPessoas pessoas={contacts} />
    </div>
  );
};

export default GerenciadorContatos;