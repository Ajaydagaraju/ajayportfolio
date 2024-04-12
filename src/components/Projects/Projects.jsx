import React from 'react'
import Project from './Project';
import styled from 'styled-components';

let data = [
    {
        img : "images/Greenstone.png",
        disc : "It is a E-commerce project where we can buy cannabe projects by can appply coupons on base of cart, product and days.",
        demo:"https://greenstoneretail.com/"
    },
    {
      img : "images/canna_mobile.png",
      disc : "It si a E-commerece project on base of multiple shop loaction.",
      demo:"https://demo.cannabee.io/calgary/"
        },
    {
      img : "images/royalapothecary.png",
      disc : "Our cutting-edge e-commerce project offers a seamless online shopping experience, featuring a vast range of products, user-friendly navigation, and secure payment gateways.", 
      demo:"https://royalapothecary.life/"   
    },
      {
        img : "images/enciser_admin.png",
        disc : "This admin panel is a based on electricity management system.",
        demo:"#"
          },
      {
        img : "images/canna_admin.png",
        disc : "It is super admin and manage multiple admin as per requiremnt of each Admin.",
        demo:"#"
          },
          
              {
                img : "images/greenstoneadmin.png",
                disc : "This admin track all data and details to track business",
                demo:"#"
                  },
                  {
                    img : "images/hyperworlf_admin.png",
                    disc : "Here we can manage whole web Dynamically by using HyperWolf Amdin.",
                    demo:"#"
                      },
                  {
                    img : "images/portfolio.png",
                    disc : "My Portfolio showcases my skill, expertise and my ability to create effective and visually appealing designs.", 
                    demo:"https://ng-blogs.vercel.app/signin"
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
