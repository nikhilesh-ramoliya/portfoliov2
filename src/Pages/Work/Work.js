import React from 'react'
import Header from '../../components/Header/Header'
import { Container, Grid, Box, Typography } from '@mui/material';
import project1 from "../../Assets/project1.jpeg"
import project2 from "../../Assets/project2.jpeg"
import project3 from "../../Assets/project3.jpeg"
import project4 from "../../Assets/project4.jpeg"
import project5 from "../../Assets/project5.jpeg"

function Work() {
  return (
    <div className='work'>
      <Header home={false} active="work" />
      <Container sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", mt: 6, rowGap: 4 }} >

        <Box sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column" },
          width: "100%"
        }}>
          <Box sx={{
            backgroundImage: `url(${project4})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { md: "0.5", xs: "1" },
            ":hover": {
              transform: "scale(1.1)",
              opacity: "1",
              borderStyle: "dashed",
            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "22vw", xs: "70vw" },
            border: "2px solid cyan",
            borderStyle: "dotted",
            borderRadius: "2.5rem"
          }}>
          </Box>
          <Box sx={{
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "100%", xs: "auto" },
            padding: { md: "1rem 5rem 0 0", xs: "1rem 0rem" },
            overflow: "hidden"
          }}>
            <Typography variant='h5' color={"cyan"}>
              BigBeyond
            </Typography>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ The Luxury Next-gen marketplace for limited edition physical and digital goods
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Integrated Third Party APIs to get payment done.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Extensively use 3d modelling libraries like Draco, Google-model-viewer. Added Stripe for payment integrations.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created CRUD screens with APIs and DB.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Designed some Admin panel screens, Deployed in AWS with AWS CodePipeline.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2, flexWrap: "wrap" }}>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                ReactJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                NodeJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Stripe
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                AWS
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Postgres
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%",
        }}>
          <Box sx={{
            // backgroundImage: `url(${project3})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { md: "0.5", xs: "1" },
            ":hover": {
              transform: "scale(1.1)",
              opacity: "1",
              borderStyle: "dashed",
            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "100%", xs: "70vw" },
            border: "2px solid cyan",
            borderStyle: "dotted",
            borderRadius: "2.5rem",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            textAlign: "center"
          }}>
            <Typography align='center' color={"cyan"}>
              Running...
            </Typography>
          </Box>
          <Box sx={{
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "auto", xs: "auto" },
            padding: { md: "1rem 0 0  5rem", xs: "1rem 0rem" },
            overflow: "hidden",
            textAlign: "right",
          }}>
            <Typography variant='h5' color={"cyan"}>
              Beyond
            </Typography>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ The Luxury Wallet For physical and digital goods
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Integrated Microservice based architecture with KAKFA.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created CRUD screens with APIs and DB.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, flexWrap: "wrap" }}>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                React-Native
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                NestJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Stripe
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Kafka
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Postgres
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column" },
          width: "100%"
        }}>
          <Box sx={{
            backgroundImage: `url(${project2})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { md: "0.5", xs: "1" },
            ":hover": {
              transform: "scale(1.1)",
              opacity: "1",
              borderStyle: "dashed",
            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "22vw", xs: "70vw" },
            border: "2px solid cyan",
            borderStyle: "dotted",
            borderRadius: "2.5rem"
          }}>
          </Box>
          <Box sx={{
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "100%", xs: "auto" },
            padding: { md: "1rem 5rem 0 0", xs: "1rem 0rem" },
            overflow: "hidden"
          }}>
            <Typography variant='h5' color={"cyan"}>
              FreightTrack
            </Typography>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ Tool to create inquiry and quotation for logistics
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created entire Project from scratch in ReactJS, NestJS and PostgreSQL
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Written Code for some calculators for import-export Business and Implemented point based system.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Deployed in Render and Vercel like platforms.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Worked extensively on routing to preserve website state in url
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                ReactJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                NestJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                PostgreSql
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%",
        }}>
          <Box sx={{
            backgroundImage: `url(${project5})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { md: "0.5", xs: "1" },
            ":hover": {
              transform: "scale(1.1)",
              opacity: "1",
              borderStyle: "dashed",
            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "100%", xs: "70vw" },
            minHeight: "22vw",
            border: "2px solid cyan",
            borderStyle: "dotted",
            borderRadius: "2.5rem",
          }}>
          </Box>
          <Box sx={{
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "auto", xs: "auto" },
            padding: { md: "1rem 0 0  5rem", xs: "1rem 0rem" },
            overflow: "hidden",
            textAlign: "right",
          }}>
            <Typography variant='h5' color={"cyan"}>
              ButterNeck
            </Typography>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ A Productivity tool for organization.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Create apis and database for create new organization , tasks and projects.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              It is a tool like where you can assign task to your project team and see progress of project any time.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, flexWrap: "wrap" }}>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                ReactJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                NestJs
              </Typography>
              <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Postgres
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column" },
          width: "100%"
        }}>
          <Box sx={{
            backgroundImage: `url(${project3})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { md: "0.5", xs: "1" },
            ":hover": {
              transform: "scale(1.1)",
              opacity: "1",
              borderStyle: "dashed",
            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "22vw", xs: "70vw" },
            border: "2px solid cyan",
            borderStyle: "dotted",
            borderRadius: "2.5rem"
          }}>
          </Box>
          <Box sx={{
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "100%", xs: "auto" },
            padding: { md: "1rem 5rem 0 0", xs: "1rem 0rem" },
            overflow: "hidden"
          }}>
            <Typography variant='h5' color={"cyan"}>
              Movies Hub
            </Typography>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ Web Site to check details of movie
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created entire Project from scratch in ReactJS.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Deployed in Render and Vercel like platforms.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                ReactJs
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%"
        }}>
          <Box sx={{
            backgroundImage: `url(${project1})`,
            backgroundPosition: "left",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: { md: "0.5", xs: "1" },
            ":hover": {
              transform: "scale(1.1)",
              opacity: "1",
              borderStyle: "dashed",

            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "22vw", xs: "70vw" },
            border: "2px solid cyan",
            borderStyle: "dotted",
            borderRadius: "2.5rem"
          }}>
          </Box>
          <Box sx={{
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            height: { md: "100%", xs: "auto" },
            padding: { md: "1rem 0 0  5rem", xs: "1rem 0rem" },
            overflow: "hidden",
            textAlign: "right"
          }}>
            <Typography variant='h5' color={"cyan"}>
              Own Notes
            </Typography>
            <Typography variant='subtitle1' color={"white"}>
              A user-friendly online platform for effortless note-taking, organization, and collaboration. Customize, search, and sync your notes across devices for a seamless and secure experience. Boost your productivity and stay organized with NoteNest's intuitive features.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Typography variant='subtitle1' color={"cyan"} component={'span'}>
                Notion
              </Typography>
            </Box>
          </Box>
        </Box>


      </Container>
    </div >
  )
}

export default Work