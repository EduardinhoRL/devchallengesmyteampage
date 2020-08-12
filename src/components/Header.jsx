import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
        font-size: 35px;
        font-family: 'Lora', serif;
    }

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        padding-right: 20px;
    }
`

const Description = styled.div`
    font-family: 'Lato', sans-serif;

    h2 {
        font-size: 18px; 
    }

    p {
        font-size: 16px;
        max-width: 350px;
        letter-spacing: .5px;
    }
`

const Header = () => {
    return ( 
        <Head>
            <h1>The creative crew</h1>
            <Description>
                <h2>WHO WE ARE</h2>
                <p>We are team of creatively diverse. driven. innovation individuals working in various locations from the world</p>
            </Description>
        </Head>
     );
}
 
export default Header;