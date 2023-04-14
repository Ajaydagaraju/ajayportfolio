import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon,  title ,techaArray} = props;
  return (
    <Container>
        <h1>{title}</h1>
        <div className='skills'>
        {techaArray?.map((item)=>{
            const { Icon,Name} = item;
            return(
            <div>
            <span className='green'><Icon/></span>
            <h6>{Name}</h6>
            </div>)
        })}
        </div>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1.5rem;
    }

    p{
        font-size: 0.8rem;
    }
    .skills{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    }
    .skills span{
        font-size:30px;
    }
    .skills h6{
        font-size:15px;
    }
`