import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Contact = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome! <br />
          My name is Spencer Grewe.
        </SectionTitle>
        <SectionText>
          I am a Data Science MS student using data to unravel the problems of the 21st century.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Contact;