import React from 'react'
import Header from '../../components/Header/Header'
import { Box, Container, Grid, List, Typography } from '@mui/material'
import { HightLightedText } from '../About/About'


function Experience() {
  return (
    <div className='experience'>
      <Header home={false} active="experience" />
      <Exp />
      <Edu />

    </div >
  )
}


const Exp = () => {
  return (
    <Container maxWidth="lg" sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography variant="h5" component="h1" color={"white"} my={{
        xs: 2,
        md: 4
      }}>
        My Experience
      </Typography>
      <Grid container>
        <Exp1 />
        <Exp2 />
      </Grid>
    </Container>
  )
}

const Exp1 = () => {
  return (
    <Grid item mt={{ xs: 2, md: 0 }} xs={12} md={6}>
      <Typography variant='h6' color={"cyan"}>
        Graduate Apprentice Trainee <Typography component={'span'} color={"gray"}>@Tata Motors</Typography>
      </Typography>
      <Typography variant='caption'>Sanand, Gujarat, India // <Typography component={'span'} variant='caption' color={"cyan"}>July 2022 - September 2022</Typography></Typography>
      <Typography variant='subtitle2' color={'white'}>Key Responsibilities : </Typography>
      <List>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> Handling Last manufacturing operations in Tata motors. In which operations like handling production line and maintaining<Typography variant='subtitle2' color={'white'} component={'span'}> Speed of production</Typography>.
        </Typography>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> Solved Issues of motor vehicles. Some <Typography variant='subtitle2' color={'white'} component={'span'}>CNG kit</Typography> and Software as well as Hardware related Issues.
        </Typography>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> <Typography variant='subtitle2' color={'white'} component={'span'}>Replace Components</Typography> in various types of cars to ensure deliver best product to the customers.
        </Typography>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> Optimized performance of production line with Communication with workers.
        </Typography>
      </List>
    </Grid>
  )
}

const Exp2 = () => {
  return (
    <Grid item mt={{ xs: 4, md: 0 }} xs={12} md={6}>
      <Typography variant='h6' color={"cyan"}>
        Full-Stack Software Developer <Typography component={'span'} color={"gray"}>@Lanatus Systems</Typography>
      </Typography>
      <Typography variant='caption'>Ahmadabad, Gujarat, India // <Typography component={'span'} variant='caption' color={"cyan"}>July 2022 - September 2022</Typography></Typography>
      <Typography variant='subtitle2' color={'white'}>Key Responsibilities : </Typography>
      <List>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> Worked with a variety of different languages, frameworks such as JavaScript, <Typography variant='subtitle2' color={'white'} component={'span'}>Javascript, React, Nest, Node.js, Prisma, Mongoose, Postgresql etc</Typography>.
        </Typography>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> Developed and maintained new features and modules using variety of libraries and frameworks.
        </Typography>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography><Typography variant='subtitle2' color={'white'} component={'span'}> Communicate and collaborate</Typography>  multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
        </Typography>
        <Typography variant='subtitle2' component={"li"} >
          <Typography variant='subtitle2' color={'cyan'} component={'span'}>☀︎</Typography> Implemented <Typography variant='subtitle2' color={'white'} component={'span'}>Unit test</Typography> using Jest and React testing library to ensure it is bug-free.
        </Typography>
      </List>
    </Grid>
  )
}

const Edu = () => {
  return (
    <Container maxWidth="lg" sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography variant="h5" component="h1" color={"white"} my={{
        xs: 2,
        md: 4
      }}>
        My Education
      </Typography>
      <Grid container>
        <EduCom name="12th Science" place="Purohit Science school" location="Jamnagar, Gujarat, India" timeSpan="July 2022 - September 2022" />
        <EduCom name="Bachelor of Electrical Engineering" place="Government Engineering College" location="Rajkot, Gujarat, India" timeSpan="July 2022 - September 2022" />

      </Grid >
    </Container >
  )
}

const EduCom = ({
  name, place, location, timeSpan
}) => {
  return (
    <Grid item mt={{ xs: 2, md: 0 }} xs={12} md={6}>
      <Typography variant='h6' color={"cyan"}>
        {name} <Typography component={'span'} color={"gray"}>@{place}</Typography>
      </Typography>
      <Typography variant='caption'>{location} // <Typography component={'span'} variant='caption' color={"cyan"}>{timeSpan}</Typography></Typography>
    </Grid>
  )
}
export default Experience