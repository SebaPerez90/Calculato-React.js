import React, { useState } from 'react';
import Boton from './components/Boton.jsx';
import InputOperation from './components/InputOperation.jsx';
import ClearBtn from './components/ClearBtn.jsx';
import Header from './components/Header.jsx';
import { evaluate } from 'mathjs';
import './stylesheets/App.css';
import './stylesheets/MediaQuery.css';

function App() {

  const [input, setInput] = useState('')

  const addInput = value => {
    setInput(input + value);
  };

  const showDetails = () => {
    const header_container = document.querySelector('.header-container');
    const header_img = document.querySelector('.header-img');
    const header_text = document.querySelector('.header-text');
    const main = document.querySelector('.main-container')

    header_container.classList.add('header-container-active');
    header_img.classList.add('header-img-active');
    header_text.classList.add('header-text-active');
    main.insertAdjacentHTML('beforebegin', `
    <div class="menu-active">
      <button class="btn-remove-style">X</button>
      <div>
        <ul class="list-item-menu">  
        <li><a  class="link-linkedin" href="https://www.linkedin.com/in/sebaperez90/" target="blank_">linkedin</a></li>
        <li><a  class="link-portfolio" href="https://sebaperez90.github.io/" target="blank_">portfolio</a></li>
        <li><a  class="link-github" href="https://github.com/SebaPerez90?tab=repositories" target="blank_">github</a></li>
        </ul>  
      </div>  
    </div>`);

    const btn_remove_styles = document.querySelector('.btn-remove-style');

    function removeAll() {
      header_container.classList.remove('header-container-active');
      header_img.classList.remove('header-img-active');
      header_text.classList.remove('header-text-active');
      document.querySelector('.menu-active').style.animation = 'apper_list_links 300ms reverse backwards';
      setTimeout(() => {
        document.querySelector('.menu-active').remove();
      }, 300);
    }

    btn_remove_styles.addEventListener('click', removeAll);

  };

  const evaluateInputs = () => {
    setInput(evaluate(input));
  };

  const clearInput = () => {
    setInput('');
  };


  return (
    <div className='App'>
      <div className='main-container'>
        <Header showDetails={showDetails} />
        <div className='calculator-container'>
          <InputOperation inputDisplay={input} />
          <div className='fila'>
            <Boton addInput={addInput}>7</Boton>
            <Boton addInput={addInput}>8</Boton>
            <Boton addInput={addInput}>9</Boton>
            <Boton addInput={addInput} type='operator'>/</Boton>
          </div>
          <div className='fila'>
            <Boton addInput={addInput}>4</Boton>
            <Boton addInput={addInput}>5</Boton>
            <Boton addInput={addInput}>6</Boton>
            <Boton addInput={addInput} type='operator'>*</Boton>
          </div>
          <div className='fila'>
            <Boton addInput={addInput}>1</Boton>
            <Boton addInput={addInput}>2</Boton>
            <Boton addInput={addInput}>3</Boton>
            <Boton addInput={addInput} type='operator'>-</Boton>
          </div>
          <div className='fila'>
            <Boton addInput={addInput}>0</Boton>
            <Boton addInput={addInput}>.</Boton>
            <Boton addInput={addInput} type='operator'>+</Boton>
            <Boton addInput={evaluateInputs} type='operator'>=</Boton>
          </div>
          <ClearBtn clearInput={clearInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
