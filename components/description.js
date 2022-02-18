import { Heading,Text,Box } from "@chakra-ui/react";

const Description = ({heading, subheading})=>{
    return <Box sx={styles.descContainer}>
        <Heading sx={styles.heading}>{heading}</Heading>
        <Text sx={styles.subheading}>{subheading}</Text>
    </Box>
}

const styles = {
    descContainer:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    heading:{
        fontSize:["1.5rem","2rem","2.5rem","3.2rem"],
        fontWeight:"800",
        lineHeight:["2rem","2.5rem","3rem","3.5rem"],
        textAlign:"center",
        color: "#2E2E2E",
        marginBottom:"1rem"
      
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