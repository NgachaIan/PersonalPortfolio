import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillCode } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" , marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#project">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/NgachaIan" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ian-ngacha-b6761b64/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.upwork.com/freelancers/~0109ad7009a20918b0?viewMode=1&s=1110580755057594368" target="_blank">
        <AiFillCode size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
