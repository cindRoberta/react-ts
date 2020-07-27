import React, { useState } from "react";

const EventHandler = () => {
  const [counter, setCounter] = useState<number>(0);
  const [entrada, setEntrada] = useState<string>('');
  const [numero, setNumero] = useState<number>(0);
  const [soma, setSoma] = useState<number>(0);

  return (
    <span>
      { counter }
      <button onClick={() => setCounter(counter + 1)}>Incrementador</button>

      { entrada }
      <input type="text" value={entrada} onChange={e => setEntrada(e.target.value)} />

      <form onSubmit={e => { setSoma(soma + Number(numero)); e.preventDefault(); }}>
        { numero }
        <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
        { soma }
        <input type="submit" value="Adicionar" />
      </form>
    </span>
  );
}

export default EventHandler;