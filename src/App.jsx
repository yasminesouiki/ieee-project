import './App.css'
import FinalPaper from './components/FinalPaper/FinalPaper'
import Navbar from './components/Navbar/Navbar'
import Navbar2 from './components/Navbar2/Navbar2'
import Welcome from './components/Welcome/Welcome'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'
import ImportantDates from './components/ImportantDates/ImportantDates'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import { Container, Grid } from '@mui/material'
import React from 'react'
import Navbar3 from './components/Navbar3/Navbar3'

function App() {

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Navbar3/>
      <ImageCarousel/>

      <Container maxWidth="lg" sx={{ pt: 6 }}>
        <Grid container spacing={4} wrap="nowrap">
          <Grid item xs={9}>
            <Welcome />
          </Grid>
          <Grid item xs={3}>
              <FinalPaper />
              <ImportantDates />
          </Grid>
        </Grid>
      </Container>
      <List/>
      <Footer />
    </>
  )
}

export default App