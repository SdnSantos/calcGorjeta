import React, { useState } from 'react';

import Title from './components/Title';
import Input from './components/Input';

function App() {
  const [conta, setConta] = useState(0);
  const [gorjeta, setGorjeta] = useState(10);

  function calculoDaGorjeta() {
    return conta * (gorjeta / 100);
  }

  function totalDaConta() {
    return parseFloat(conta) + parseFloat(calculoDaGorjeta());
  }

  return (
    <>
      <Title>Calculadora de Gorjeta</Title>
      <h4>Quanto deu a conta?</h4>
      <Input
        id="conta"
        value={conta}
        onChange={(e) => setConta(e.target.value)}
      ></Input>
      <h4>Qual a porcentagem de gorjeta?</h4>
      <Input
        id="gorjeta"
        value={gorjeta}
        onChange={(e) => setGorjeta(e.target.value)}
      ></Input>
      <hr />
      {conta > 0 && (
        <>
          <h4>Sub-total: R${conta}</h4>
          <h4>
            Gorjeta({gorjeta}%): R${calculoDaGorjeta()}
          </h4>
          <h4>
            <b>Total: R${totalDaConta()}</b>
          </h4>
        </>
      )}
    </>
  );
}

export default App;
