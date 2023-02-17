import React from 'react';

import { 
  Title 
} from "react-email-template";



import { 
  Divider, Strong, Paragraph, Separator, HeadingOne  
} from "react-email-components-typography";


import { 
  Image
} from "react-emails-components-miscellaneous"

const BodyPrototype = ({ config }) => {
  const {
    mainTitle, paragraphFirst,
    memImageLink, paragraphSecond,
    heading, paragraphThird,
    memImageLink2, paragraphFourth,
    heading2, heading3, imageLink, paragraphFive,
  } = config;

  return (
    <>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      <Paragraph>
        {paragraphFirst}
      </Paragraph>
      <Image
        href="#"
        src={memImageLink}
        alt="GIF"
      />
      {' '}
      I
      <Divider />
      <Paragraph>
        {paragraphSecond}
      </Paragraph>
      <Heading>
        <Strong>{heading}</Strong>
      </Heading>
      <Paragraph>
        {paragraphThird}
      </Paragraph>
      <Image
        href="#"
        src={memImageLink2}
      />
      <Divider />
      <Paragraph>
        {paragraphFourth}
      </Paragraph>
      <Heading>
        <Strong>{heading2}</Strong>
      </Heading>
      <Heading>
        <Strong>{heading3}</Strong>
      </Heading>
      <Image href="#" src={imageLink} />
      <Divider />
      <Paragraph>
        {paragraphFive}
      </Paragraph>
      <Divider />
    </>
  );
};

export default BodyPrototype;
