import React from 'react'
import Project from './Project';
import styled from 'styled-components';

let data = [
    {
        img : "images/memory_game.png",
        disc : "A Memory card game with a 60-minute timer is a game that challenges players to match pairs of cards that are laid out on a board. The Players racing to find all the matches before time runs out.",
        demo:"https://nehagupta7.github.io/card-game/"
    },
    {
      img : "images/blog.png",
      disc : "Imagery Mood Blog Page is a unique and creative way to express images view, share one's unique perspective on the world, and inspire others with the power of beautiful thought of random images",
      demo:"https://ng-blogs.vercel.app/signin"
        },
    {
      img : "images/skills.png",
      disc : "My Portfolio showcases my skill, expertise and my ability to create effective and visually appealing designs.",
      demo:"https://neha-gupta-portfolio.netlify.app/"   },
   
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
