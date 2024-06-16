import React from 'react'
import Header from '../../components/Header/Header'
import { Box, Container, Grid, Typography } from '@mui/material'
import my from "../../Assets/my.png"

export const HightLightedText = ({ text }) => {
  return (
    <Typography variant='body1' component={"span"} color={'cyan'}>
      {text}
    </Typography>
  )
}

function About() {
  return (
    <div className='about'>
      <Header home={false} active="about" />
      <Container maxWidth="lg" sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: "row" },
        mt: 4
      }}>
        <Box>
          <Typography variant="h5" component="h1" color={"white"} gutterBottom sx={{ display: "flex", justifyContent: "space-between" }}>
            About Me
            <a href="https://drive.google.com/drive/folders/1YwbO_w7w3QwfleAdV0FNfVpksSqMasrD"><div className='iconButton'>Resume</div></a>
          </Typography>
          <Typography variant="subtitle2" paragraph>
            I'm a Full-Stack Developer specializing in <HightLightedText text="Node.js" /> and <HightLightedText text="React.js" />.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            With a passion for creating efficient and scalable web applications, I deliver high-quality solutions tailored to clients' needs.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            I excel in Node.js and React.js, building dynamic and interactive web applications with robust back-end systems and modular front-end components.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            Additionally, I have experience in cloud computing and infrastructure, utilizing <HightLightedText text={"AWS"} /> for optimal application performance and scalability.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            I also have hands-on experience with <HightLightedText text="Stripe" /> for seamless and secure payment processing and integration.
          </Typography>
          <Typography variant="subtitle2" paragraph>
            If you're looking for a dedicated Full-Stack Developer to bring your ideas to life, please don't hesitate to reach out. Let's achieve your goals together!
          </Typography>
          <Box>
            <Typography>
              <Typography component={"span"} variant='h6' mr={2} color={'cyan'}>
                ♛
              </Typography>
              Here are a few technologies I’ve been working with recently:
            </Typography>
            <Grid container width={"100%"}>
              <Grid item xs={6} md={4} color={"white"} display={'flex'} mt={1}>♖ <Typography color={"cyan"} variant='subtitle1' ml={1}>ReactJs</Typography></Grid>
              <Grid item xs={6} md={4} color={"white"} display={'flex'} mt={1}>♖ <Typography color={"cyan"} variant='subtitle1' ml={1}>NodeJs</Typography></Grid>
              <Grid item xs={6} md={4} color={"white"} display={'flex'} mt={1}>♖ <Typography color={"cyan"} variant='subtitle1' ml={1}>NestJs</Typography></Grid>
              <Grid item xs={6} md={4} color={"white"} display={'flex'} mt={1}>♖ <Typography color={"cyan"} variant='subtitle1' ml={1}>React-Native</Typography></Grid>
              <Grid item xs={6} md={4} color={"white"} display={'flex'} mt={1}>♖ <Typography color={"cyan"} variant='subtitle1' ml={1}>Stripe</Typography></Grid>
              <Grid item xs={6} md={4} color={"white"} display={'flex'} mt={1}>♖ <Typography color={"cyan"} variant='subtitle1' ml={1}>AWS</Typography></Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{
          backgroundImage: `url(${my})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { md: "auto", xs: "100vw" },
          width: { md: "25vw", xs: "100vw" },
        }}>

        </Box>

      </Container>
    </div>
  )
}

export default About