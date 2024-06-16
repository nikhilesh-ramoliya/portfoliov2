import React from 'react'
import Header from '../../components/Header/Header'
import { Container, Box, Typography } from '@mui/material';
import project1 from "../../Assets/mansionvoyeur.com.png"
import project2 from "../../Assets/project2.jpeg"
import project3 from "../../Assets/app.butterneck.com.png"
import project4 from "../../Assets/project4.jpeg"
import project5 from "../../Assets/butterneck.com.png"
import project6 from "../../Assets/handonbooking.png"
import project7 from "../../Assets/dragonArmy.ai.png"

const DynamicBackground = ({ url, link }) => {

  return <Box
    onClick={() => window.open(link)}
    sx={{
      backgroundImage: `url(${url})`,
      backgroundPosition: "center center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      opacity: { md: "0.5", xs: "1" },
      ":hover": {
        transform: "scale(1.02)",
        opacity: "1",
      },
      width: { md: "50%", xs: "100%" },
      boxSizing: "border-box",
      height: { md: "22vw", xs: "70vw" },
      borderRadius: "0.5rem"
    }}>
  </Box>
}

const TextContainer = ({ children, title }) => {
  return (
    <Box sx={{
      width: { md: "50%", xs: "100%" },
      boxSizing: "border-box",
      height: { md: "100%", xs: "auto" },
      padding: { md: "1rem 0rem 0 0", xs: "1rem 0rem" },
      overflow: "hidden"
    }}>
      <Typography variant='h5' color={"cyan"} mb={2}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

const TechUsed = ({ tech }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
      {tech?.map((item, index) => {
        return (<><Typography key={index} variant='subtitle1' color={"cyan"} component={'span'}>
          {item}
        </Typography>
          {
            index !== tech.length - 1 && <Typography variant='subtitle1' color={"white"} component={'span'} mx={2}>|</Typography>
          }
        </>)
      })}
    </Box>
  )
}

function Work() {
  return (
    <div className='work'>
      <Header home={false} active="work" />
      <Container sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", mt: 6, rowGap: 4 }} >
        {/* //! app.butterneck */}
        <Box sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column" },
          width: "100%"
          , gap: 4
        }}>
          <DynamicBackground url={project3} link={"https://app.butterneck.com/"} />
          <TextContainer title={"Butterneck"}>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ Project ManageMent tool for organization.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created multiple features like Time Tracker, Task Board and Implement role system.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Deployed two environments dev and prod on ec2 using AWS CodePipeline and github actions.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Integrate payment subscriptions using Razorpay.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Designed an synchronized task board using socket.io.
            </Typography>
            <TechUsed tech={['ReactJs', 'AWS', 'Razorpay', "Nest JS", "Postgres"]} />
          </TextContainer>
        </Box>

        {/* //! mansionvoyeur */}
        <Box sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%"
          , gap: 4
        }}>
          <DynamicBackground url={project1} link={"https://mansionvoyeur.com/"} />
          <TextContainer title={"MansionVoyeur"}>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ Live Streaming platform.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Generated Underline architecture for live video streaming and recording using S3, Ec2, RDS.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Applied subscription and on the go payment using Stripe, Paypal, EmerchantPay.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created two types of users like Subscribers and minute buyers.
            </Typography>
            <TechUsed tech={['NextJs', 'AWS', 'Stripe', "Paypal", "Node Js", "Postgres"]} />
          </TextContainer>
        </Box>

        {/* //! HandsOn */}
        <Box sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column" },
          width: "100%"
          , gap: 4
        }}>
          <DynamicBackground url={project6} link={"https://handsonbooking.dk/"} />
          <TextContainer title={"HandsOn Booking"}>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ Online booking platform for doctors.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Linked Dinero System to the online booking platform for import and export of data.
            </Typography>
            <TechUsed tech={['ReactJs', "Node JS", "Postgres"]} />
          </TextContainer>
        </Box>

        {/* //! satellite al */}
        <Box sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%"
          , gap: 4
        }}>
          <DynamicBackground url={project7} link={"https://dragonarmy.ai/"} />
          <TextContainer title={"DragonArmy.ai"}>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ An Alert management system for SATELLITE.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Create an role system and admin panel for precise permission.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Created caching system for better performance.
            </Typography>
            <TechUsed tech={['NestJs', 'AWS', 'GraphQL', "ReactJs", "Postgres"]} />
          </TextContainer>
        </Box>


        <Box sx={{
          display: "flex",
          flexDirection: { md: "row-reverse", xs: "column" },
          width: "100%",
          gap: 4
        }}>

          <DynamicBackground url={project4} link={"https://bigbeyond.com/"} />
          <TextContainer title={"BigBeyond"}>
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
          </TextContainer>
        </Box>


        <Box sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%",
          gap: 4
        }}>
          <DynamicBackground url={project5} link={"https://butterneck.com/"} />
          <TextContainer title={"Butterneck site"}>
            <Typography variant='subtitle1' color={"white"}>
              ☀︎ A Lending page or an Blog site.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Implement dynamic blogging using Strapi.
            </Typography>
            <Typography variant='subtitle1' color={"white"} >
              <Typography variant='h6' color={"cyan"} component={'span'} mr={1}>♖</Typography>
              Deployed on Vercel. And storage used is AWS S3.
            </Typography>

            <TechUsed tech={['NextJs', 'Strapi', 'AWS']} />
          </TextContainer>
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
              transform: "scale(1.02)",
              opacity: "1",
            },
            width: { md: "50%", xs: "100%" },
            boxSizing: "border-box",
            // height: { md: "22vw", xs: "70vw" },
            borderRadius: "0.5rem"
          }}>
            {/* <Typography align='center' color={"cyan"}>
              Running...
            </Typography> */}
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
          <DynamicBackground url={project2} />
          <TextContainer title={"FreighTrack"}>
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
          </TextContainer>
        </Box>

      </Container>
    </div >
  )
}

export default Work