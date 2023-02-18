import React from 'react';

import { Sponsor, Title } from "react-email-template";

import { 
  Image
} from "react-emails-components-miscellaneous"

import { 
  CtaList, GetPublished, JoinUs
 }  from "atherdon-react-markdown-component-body"


 import { 
  Divider, Strong, Paragraph, Separator, HeadingOne  
} from "react-email-components-typography";


import { links } from './config';

const BodyPrototype = ({ config }) => {
  const {
    sponsor, mainTitle, paragraphFirst, memImageLink,
    paragraphSecond, heading, paragraphThird, memImageLink2,
    paragraphFourth, heading2, heading3, imageLink, paragraphFive,
  } = config;

  return (
    <>
      <Sponsor
        leftHref={links.sponsor}
        rightHref={sponsor.link}
        leftSrc={sponsor.imageUrl}
      >
        {sponsor.text}
      </Sponsor>
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
      <Divider />
      <CtaList />
      <Separator />
      <JoinUs />
      <Divider />
      <Separator />
      <GetPublished />
      <Divider />
      <Sponsor
        leftHref={links.sponsor}
        rightHref={sponsor.link}
        leftSrc={sponsor.imageUrl}
      >
        {sponsor.text}
      </Sponsor>
    </>
  );
};

export default BodyPrototype;
