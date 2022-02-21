import { Heading,Text,Box } from "@chakra-ui/react";

const Description = ({heading, subheading})=>{
    return <Box sx={styles.descContainer}>
        <Heading sx={styles.heading} lineHeight="77px">{heading}</Heading>
        <Text sx={styles.subheading} lineHeight="28px">{subheading}</Text>
    </Box>
}

const styles = {
    descContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    heading:{
        fontSize:["2rem","2.5rem","3.2rem",,"3.5rem",],
        fontWeight:"800",
        textAlign:"center",
        color: "#2E2E2E",
    },
    subheading:{

        fontSize:"1rem",
        lineHeight:"28px",
        textAlign:"center",
        letterSpacing:"0.05rem",
        color:"#808080"
    }
}

export default Description