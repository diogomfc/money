import styled from 'styled-components'
import {darken, transparentize} from 'polished'
export const Container = styled.form`
  h2{ 
    color: var(--text-title);
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  input{ 
    width: 100%;
    padding: 0 1.5rem;
    height: 6.4rem;
    border-radius: .6rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder{
      color:var(--text-body);
    }

    & + input{
      margin-top: 1.6rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 6.4rem;
    color: #fff;
    background: var(--green);
    border-radius: .6rem;
    border:0;
    font-size: 1.6rem;
    margin-top: 1.6rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
  }

`
interface RadioBoxProps{
  isActive:boolean;
  activeColor:'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red:'#E52E4D'
}

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem  0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    //gap: 0.5rem;
    height: 6.4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.6rem;

    background: ${props => props.isActive 
      ? transparentize(.9,colors[props.activeColor])
      : 'transparent'
      };

    transition: border-color(.2s);

    &:hover{
      border-color: ${darken(.1,'#d7d7d7')};
    }

    img{
      width:2.5rem;
      height:2.5rem;
    }

    span{
      display: inline-block;
      margin-left: 1.6rem;
      font-size: 1.6rem;
      color: var(--text-title)
    }
`