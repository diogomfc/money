import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding:  1.6rem 1.6rem 12rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{ 
    font-size: 1.6rem;
    color: var(--shape);
    background-color: var(--blue-light);
    border-radius: .25rem;
    padding:0 3.2rem;
    border: 0;
    height: 4.8rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(.9)
    }
  }
`
