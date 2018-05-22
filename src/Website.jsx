import React, { Component } from 'react';
import {
  ScrollToTopOnMount,
  SectionsContainer, 
  Section
} from 'react-fullpage';
import Header from './Header';
import section2img from './images/section2.jpg'
import section3img from './images/section3.jpg'
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
      // activeSection:        "sectionOne",
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
          
        </Header>
        <ScrollToTopOnMount />
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">

          </Section>
          <Section color="#A7DBD8" >
            <div style={{backgroundImage: "url("+section2img+")",backgroundSize: "100% 100%",backgroundRepeat:"no-repeat",height:"100%",width:"100%"}}></div>
          </Section>
          <Section color="#E0E4CC">
            <div style={{backgroundImage: "url("+section3img+")",backgroundSize: "100% 100%",backgroundRepeat:"no-repeat",height:"100%",width:"100%"}}></div>
          </Section>
          <Section color="#E1532D">Page 4</Section>
        </SectionsContainer>
      </div>
    );
  }
}
export default Website;
