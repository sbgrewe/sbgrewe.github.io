import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/projects'>Projects</a>
      </li>      
      <li>
        <a href='/blog'>Blog</a>
      </li>        
      <li>
        <a href='/about'>About</a>
      </li>        
      <li>
        <a href='/contact'>Contact</a>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sbgrewe">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
