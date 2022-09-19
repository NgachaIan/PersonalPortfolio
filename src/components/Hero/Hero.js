import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br />
        I am Ian Duncan Ngacha a Web Developer by profession
      </SectionTitle>
      <SectionText>
        I create complex user interfaces using Figma as per the Client's request then develop the actual Front End Application using technologies like React, ChakraUI among others
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;