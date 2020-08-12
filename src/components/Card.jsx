import React from 'react'

import styled from 'styled-components'
 

const CardA = styled.div` 
    display: flex; 
    margin-top: var(--topfirst);
    flex-direction: column;

    &&:nth-child(2) {
        margin-top: var(--topsecond);
    }

    &&:nth-child(4), &&:nth-child(6) {
        margin-top: 0px;
    }

    img {
        width: 75%; 
        vertical-align: top;  
    }

    div div {   
        width: 30px;
        overflow: hidden;

        p {
            position: relative;
            font-size: 14px;
            font-family: 'Lora', serif;
            text-transform: uppercase; 
            font-weight: 400; 
            transform: rotate(90deg);
            width: 150px;
            left: -55px;
            top: 52px;
        }
    }
 
    p {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 17px;
        align-self: stretch;
    }

    @media only screen and (max-width: 1100px) {
        img {
            width: 75%;
        }

        span {
            left: unset;
            right: 0;
        }

        &&:nth-child(2), 
        &&:nth-child(4), 
        &&:nth-child(6) {
            margin-top: var(--topsecond);
        }  
    }

    @media only screen and (max-width: 750px) {
        grid-template-columns: 1fr;
    }

`

const Contentimg = styled.div`
    display: flex;
    overflow: hidden;
`

const Card = ({member}) => {

    const {name, area, img} = member

    return ( 
        <CardA> 
            <Contentimg>
                <img src={img} alt=""/>
                <div><p>{area}</p></div> 
            </Contentimg>
            <p>{name}</p>
        </CardA>
     );
}
 
export default Card;