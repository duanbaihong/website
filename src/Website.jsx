import React, { Component } from 'react';
import {
  ScrollToTopOnMount,
  SectionsContainer, 
  Section
} from 'react-fullpage';
import Header from './Header';
// const app = document.querySelector('#root');

class Website extends Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    "0px",
      sectionPaddingBottom: "0px",
      arrowNavigation:      false,
      navigationClass:      "navclass",
      navigationAnchorClass: "navclild",
      // className: "test",
      delay:                900,
      scrollCallback:       (a)=>{
                              console.log(a)
                            }
    };

 
    return (
      <div>
        <Header className="header">
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
          <a href="#sectionFour">Section Foure</a>
        </Header>
        <ScrollToTopOnMount />
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
          <Section color="#A7DBD8">Page 2</Section>
          <Section color="#E0E4CC">Page 3</Section>
          <Section color="#E1532D">Page 4</Section>
        </SectionsContainer>
      </div>
    );
  }
}
export default Website;
