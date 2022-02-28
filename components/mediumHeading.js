import {Box,Heading} from "@chakra-ui/react"

const MediumHeading = ({headingText}) =>{

    const styles = {
        container:{
         textAlign:"center"
        },
        heading:{
            fontWeight:"600",
            fontSize:"44px",
            lineHeight:"60px",
            letterSpacing:"-1.5px",
            color:"#0F2137"
        }


    }
    return <Box sx={styles.container}>
        <Heading sx={styles.heading}>{headingText}</Heading>
    </Box>
}

export default MediumHeading