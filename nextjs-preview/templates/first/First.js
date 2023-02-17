import React from 'react';

import { Divider } from "react-email-components-typography";

import { Logo } from "react-emails-components-miscellaneous";


// import { Logo } from "atherdon-react-markdown-component-content"

// import HOC from './HOC';

// import { HOC } from "atherdon-react-markdown-component-wrapper";
// guessing
import { Block } from "react-email-components-template"


import Footer from './Footer';

import BodyPrototype from './Body/BodyPrototype';



import config from './config';
import { styles } from './styles';

const First = ({ header }) => (
  <Block styles={{ ...styles }}>
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
        <Divider></Divider>
          {/*<Divider>
            
            <BodyPrototype
              config={config}
            />
          </Divider>*/}
          <Logo />
        </td>
      </tr>
    </tbody>
    <Footer />
  </Block>
);

export default First;
