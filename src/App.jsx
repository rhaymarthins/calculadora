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
  background: #141D10;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  main{
    background: #43533D;
    // background: #416D6D;
    height: 60vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: white;
  }
`

const Button = styled.section`
  width: 30vw;
  height: 10vh;
  border: 2px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button{
    background: #243F4D;
    width: 5vw;
    height: 5vh;
    border-radius: 15px;
    color: white;
    font-weight: bold;
  }
`


// const Main = styled.main`
//   background: #FFA0D9;
//   height: 20vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
// `

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
        <main>
          <h1>Calculadora</h1>

          <h2>{resultado}</h2>

          <section>
            <input type="number" onChange={CapturarPrimeiroValor} />
            <input type="number" onChange={CapturarSegundoValor} />

          </section>

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
