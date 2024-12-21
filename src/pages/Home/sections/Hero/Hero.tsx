import {Box, Container, Grid, styled, Typography } from "@mui/material"
import  Perfil  from "../../../../assets/images/João-Oliveira.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/styledButton/styledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackgroud/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",

    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius:"50%",
        border: "1px solid",
        borderColor: theme.palette.primary.contrastText
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                            <StyledImg src={Perfil} />
                            </Box>
                        </Box>
                                              
                        
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center"> João Oliveira</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">FullStack Developer in Development</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>

                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon fontSize="small"/>
                                    <Typography>
                                        Contact Me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>            
        </StyledHero>
      </>
    )
  }
  
  export default Hero