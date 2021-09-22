import React from 'react';

import { Divider } from "react-email-components-typography";
import { Logo } from "react-emails-components-miscellaneous";


import { Container } from "react-email-components-template";


import Footer from './Footer';

import BodyPrototype from './Body/BodyPrototype';


import config from './config';
import { styles } from './styles';

const First = ({ header }) => (
  <Container styles={{ ...styles }}>


    <tbody>
      
      <tr>
        <td valign="top" id="templatePreheader" style={styles.templatePreheader}>
          <Logo />        
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateHeader" style={styles.templateHeader} data-testid="bodyPropsTest">
          {header}
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateBody" style={styles.templateBody}>
          <Divider>
            {/*
            <BodyPrototype
              config={config}
            />*/}
          </Divider>
          <Logo />
        </td>
      </tr>
    </tbody>

    
    {/*<Footer /> */}
  </Container>
);

export default First;
