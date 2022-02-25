import styled from "styled-components";


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3.2rem;
margin-top: -9rem;

div{ 
  background: var(--shape);
  padding: 1.6rem 2rem;
  border-radius: .5rem;
  color: var(--text-title);

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{ 
      font-size: 1.6rem;
    }
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
    font-weight: normal;
    line-height: 4.8rem;
  }

  &.highlight-background{
  background:var(--green);
  color:var(--shape)
}
}

`

