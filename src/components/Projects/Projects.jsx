import React from 'react'
import Project from './Project';
import styled from 'styled-components';

let data = [
    {
        img : "images/memory_game.png",
        disc : "Memory Game with a 60 mint Timer",
        demo:"https://nehagupta7.github.io/card-game/"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
   
];


const SliderComp = () => {
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      {sliderProject}
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap:1rem
`
