import React from 'react';

import { 
  Copyright, Address, 
  Unsubscribe, NewsletterSponsorshipLink 
} from "react-emails-components-miscellaneous"

import { 
  Table, 
  TableLeft 
} from "react-email-components-table";

import { styles } from './styles';

import { config } from './config';

const Footer = () => (
  <div>
    <Table
      className="mcnFollowBlock"
      style={styles.followBlock}
    >
      <tbody className="mcnFollowBlockOuter">
        <tr>
          <td align="center" valign="top" style={styles.followBlockInner} 
            className="mcnFollowBlockInner">

            <Table
              className="mcnFollowContentContainer"
              style={styles.followContentContainer}
            >
              <tbody>
                <tr>
                  <td align="center" style={styles.tdCenter}>
                    <Table
                      style={styles.followContent}
                      className="mcnFollowContent"
                    >
                      <tbody>
                        <tr>
                          <td align="center" valign="top" style={styles.tdCenterTop}>
                            <Table
                              align="center"
                              style={styles.tableCenter}
                            >
                              <tbody>
                                <tr>
                                  <td align="center" valign="top" style={styles.tdCenterTop2}>

                                    <TableLeft
                                      href={config.twitter}
                                      src={config.twitterLogo}
                                      alt="Twitter"
                                    />

                                    <TableLeft
                                      href={config.facebook}
                                      src={config.facebookLogo}
                                      alt="Facebook"
                                    />

                                    <TableLeft
                                      href={config.instagram}
                                      src={config.instagramLogo}
                                      alt="Instagram"
                                    />

                                    <TableLeft
                                      href={config.hn}
                                      src={config.hnLogo}
                                      alt="Website"
                                    />

                                    <TableLeft
                                      href={config.youtube}
                                      src={config.youtubeLogo}
                                      alt="YouTube"
                                    />

                                    <TableLeft
                                      href={config.email}
                                      src={config.emailLogo}
                                      alt="Email"
                                    />
                                    
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
    <Table
      className="mcnTextBlock"
      style={styles.textBlock}
    >
      <tbody className="mcnTextBlockOuter">
        <tr>
          <td valign="top" className="mcnTextBlockInner" style={styles.textBlockInner}>
            <Table
              align="left"
              style={styles.textContentContainer}
              className="mcnTextContentContainer"
            >
              <tbody>
                <tr>
                  <td valign="top" className="mcnTextContent" style={styles.textContent}>
                    <Copyright />
                    <br />
                    <Address />
                    <br />
                    <Unsubscribe />
                    <NewsletterSponsorshipLink />
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default Footer;
