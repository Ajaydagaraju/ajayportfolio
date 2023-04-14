import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript ,IoLogoNodejs} from "react-icons/io";
import { SiTailwindcss,SiRedux ,SiRender,SiNetlify,SiVercel,SiMui,SiReactquery} from "react-icons/si";
import { DiCss3,DiSass } from "react-icons/di";
import { CgBitbucket } from "react-icons/cg";
import { SiVite,SiSocketdotio ,} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h4>
          My <span className="green">Skills</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={BsCreditCard2FrontFill}
            title={"Frontend Styling"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                techaArray={[{Icon:AiFillHtml5,Name:"HTML5"},{Icon:DiCss3,Name:"CSS3"},{Icon:SiTailwindcss,Name:"Tailwind"},{Icon:DiSass,Name:"SASS"}]}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Version Control"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                techaArray={[{Icon:AiFillGithub,Name:"GitHub"},{Icon:CgBitbucket,Name:"Bitbucket"}]}
          
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Js Framework/Library"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                techaArray={[{Icon:IoLogoJavascript,Name:"JS"},{Icon:FaReact,Name:"React"},{Icon:TbBrandNextjs,Name:"Nextjs"},{Icon:SiVite,Name:"Vite"}]}
          
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"State Management"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                techaArray={[{Icon:SiRedux,Name:"Redux Toolkit"},{Icon:SiRedux,Name:"Redux"},{Icon:FaReact,Name:"Context Api"}]}
          
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Deployment"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                techaArray={[{Icon:SiNetlify,Name:"Netlify"},{Icon:SiVercel,Name:"Vercel"},{Icon:SiRender,Name:"Render.io"}]}
          
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Other Basic"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
                techaArray={[{Icon:SiSocketdotio,Name:"Socket"},{Icon:SiMui,Name:"MUI"},{Icon:SiReactquery,Name:"React Query"}]}
          
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
