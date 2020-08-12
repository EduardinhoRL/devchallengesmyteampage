import React from 'react';

import styled from 'styled-components'

const Foot = styled.footer`
    text-align: center;
    padding-bottom: 25px;
    color: #9f9f9f;
    margin-top: 100px;

    a {
        text-decoration: none;
        color: #9f9f9f;
    }
`

const Footer = () => {
    return ( 
        <Foot>EduardoRL @ <a href="https://devchallenges.io/challenges">DevChallenges</a></Foot>
     );
}
 
export default Footer;