import {Box} from "@chakra-ui/react"
import AppAccordion from "../components/appAccordion"
import MediumHeading from "../components/mediumHeading"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import {terms} from "../utils/data"

const Terms = ()=>{
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
            <MediumHeading headingText="Terms and conditions"/>
            </Box>
        <AppAccordion array={terms}/>
        </Box>
        <Footer/>
    </>
}

export default Terms

