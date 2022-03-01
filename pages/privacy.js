import {Box} from "@chakra-ui/react"
import AppAccordion from "../components/appAccordion"
import MediumHeading from "../components/mediumHeading"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {privacy} from "../utils/data"

const Privacy = ()=>{
    const styles={
        container:{
            flexDirection:"column",
            alignItems:"center",
            width:"100%",
            maxWidth:"927px",
            mx:"auto",
            mb:"10rem",
            px:["1rem","1.5rem","2.5rem","4rem","7rem"]
            
        },
        headingWrapper:{
            mt:"2rem",
            mb:"3rem"
        }
    }
    return <>
      <Navbar/>
        <Box sx={styles.container}>
            <Box sx={styles.headingWrapper}>
            <MediumHeading headingText="Privacy Policy"/>
            </Box>
        <AppAccordion array={privacy}/>
        </Box>
        <Footer/>
    </>
}

export default Privacy

