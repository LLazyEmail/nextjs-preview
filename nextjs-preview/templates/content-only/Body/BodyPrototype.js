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
      <Title>
        {mainTitle}
      </Title>
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
      <HeadingOne>
        <Strong>{heading}</Strong>
      </HeadingOne>
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
      <HeadingOne>
        <Strong>{heading2}</Strong>
      </HeadingOne>
      <HeadingOne>
        <Strong>{heading3}</Strong>
      </HeadingOne>
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
