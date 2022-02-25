import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
  --background: #f0f2f5;
  --shape:#FFFFFF;

  --blue: #5429CC;
  --blue-light: #6933ff;

  --green:#33CC95;
  --red: #E52E4D;

  --text-title: #363F5F;
  --text-body: #969CB3;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:"Poppins", Arial, sans-serif;
}

// fonte-size: 16px -- Padrão
//Acessibilidade
html {
  font-size: 62.5%; // 10px

  @media (max-width: 1080px) {
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px) {
    font-size: 87.5%; //14px
  }
}

body {
background: var(--background);
-webkit-font-smoothing: antialiased; //detalhar as fontes em outros browses 
}

//Sobre escrever as fontes para os elementos.
body, input, textarea, button {
font-weight:400;
}

//Tags de negrito
h1, h2, h3, h4, h5, h6, strong{
 font-weight:600;
}

button{
  cursor: pointer;
}

//Tudo que estiver desabilitado muda a opacidade e o cursor 
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overly{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom:0;
  left: 0;
  right:0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width: 576px;
  background:var(--background);
  padding: 4.8rem;
  position:relative;
  border-Radius: .6rem;

}

.react-modal-close{
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  border:0;
  background: transparent;

  transition: filter 0.2s;

  &:hover{
   filter: brightness(0.8);
  }
}

`