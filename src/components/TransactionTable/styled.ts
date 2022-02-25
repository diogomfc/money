import styled from "styled-components";

export const Container = styled.div`
 padding: 4rem 0;

 table{ 
   width: 100%;
   border-spacing: 0 0.5rem;

   thead tr th{

     margin: 0;
     font-size: 1.6rem;
     padding: 2rem 3.2rem;
     color: var(--text-body);
     font-weight: 400;
     text-align: left;
   }

   tbody tr td{
    font-size: 1.6rem;
    padding: 1.6rem 3.2rem;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.4rem;

    &.title{
      color: var(--text-title)
    }

    &.deposit{
      color: var(--green)
    }

    &.withdrawal{
      color: var(--red)
    }
   }



 }

`