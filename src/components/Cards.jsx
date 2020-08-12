import React from 'react'
import Card from './Card'

import styled from 'styled-components'

const CardsA = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    

    @media only screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

`


const Cards = () => {

    const members = [
        {name: 'Bill Mahoney', area: 'Product Owner', img: 'https://i.imgur.com/JQPk44v.png'},
        {name: 'Saba Cabrera', area: 'Art Director', img: 'https://i.imgur.com/yIUdnu3.png'},
        {name: 'Shae Le', area: 'Tech Lead', img: 'https://i.imgur.com/8dlJQQk.png'},
        {name: 'Skylah Lu', area: 'Ux Designer', img: 'https://i.imgur.com/ElCHttQ.png'},
        {name: 'Griff Richards', area: 'Developer', img: 'https://i.imgur.com/utvL7wA.png'},
        {name: 'Stan John', area: 'Developer', img: 'https://i.imgur.com/4ey6ta0.png'},
    ]

    console.log(members[0].name);

    return ( 
        <CardsA>
            {members.map(member => (
                <Card
                    key={member.name}
                    member={member}
                />
            ))}
        </CardsA>
     );
}
 
export default Cards;