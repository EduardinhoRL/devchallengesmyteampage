import React from 'react';
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'

import styled from 'styled-components'

const Container = styled.div` 
  width: 100%;
  max-width: 1000px;
  margin: 80px auto 0 auto; 
  display: grid;  

  @media only screen and (max-width: 1100px) {
    padding-left: 20px;
  }

  @media only screen and (max-width: 750px) {
    margin: 0 auto; 
}

`

function App() {
  return (
    <Container>

      <Header />
      <Cards />
      <Footer />

    </Container>
  );
}

export default App;
