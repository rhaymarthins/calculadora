import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Body = styled.body`
  background: #113946;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  main{
    background: #BCA37F;
    height: 60vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    border-radius: 50px;
  }
`

const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: #F7FFE5;
  width: 20vw;
  height: 5vh;
  color: black;
`

const Input = styled.section`
  // border: 2px solid tomato;
  width: 30vw;
  height: 5vh;
  display: flex;
  justify-content: space-around;
`

const Button = styled.section`
  width: 30vw;
  height: 10vh;
  // border: 2px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button{
    background: #001524;
    width: 5vw;
    height: 5vh;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }

  button:hover{
    text-shadow: 0 0 3px #F4F2F3;
}
`

function App() {

  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState(0);

  const CapturarPrimeiroValor = (item) => {
    // target => alvo e value => valor
    // mostre pra mim no console dentro da minha tag input o meu alvo que é o valor
    setPrimeiroValor(Number(item.target.value));
  };

  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  }

  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  }

  const Subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  }

  const Multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  }

  const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
  }

  return (
    <>
      <EstiloGlobal />
      <Body>
        <h1>Calculadora</h1>
        <main>
          <H2>{resultado}</H2>

          <Input>
            <input type="number" onChange={CapturarPrimeiroValor} />
            <input type="number" onChange={CapturarSegundoValor} />
          </Input>

          <Button>
            <button onClick={Soma}>+</button>
            <button onClick={Subtracao}>-</button>
            <button onClick={Multiplicacao}>x</button>
            <button onClick={Divisao}>÷</button>
          </Button>
        </main>
      </Body>



    </>
  )
}

export default App
