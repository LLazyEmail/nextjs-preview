import React from 'react';

import { Divider } from "react-email-components-typography"

import HOC from '../../components/HOC/HOC';

// import { HOC } from "atherdon-react-markdown-component-wrapper";

// import { Block } from "react-email-components-template"

import Footer from './Footer';



import BodyPrototype from './Body/BodyPrototype';



import config from './config';
import { styles } from './styles';

const ContentOnly = ({ header }) => (
  <HOC styles={{ ...styles }}>
    <tbody>
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
            />
             */}
          </Divider>
        </td>
      </tr>
    </tbody>

    <Footer />

  </HOC>
);

export default ContentOnly;
