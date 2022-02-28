import {Heading,Text,Flex} from "@chakra-ui/react"

const FormHeader= ({heading,text})=>{
       const styles = {
           container:{
               flexDirection:"column",
               width:"100%",
               textAlign:"center"
           },
           heading:{
            fontWeight:"600",
            fontSize:"28px",
            lineHeight:"32px",
            letterSpacing:"-0.055em",
            color:"#1E2C3D"
           },
           text:{
            fontWeight:"normal",
            fontSize:"17px",
            lineHeight:"25px",
            color: "#93B0C8"  
           }
       }

    return <Flex sx={styles.container}>
        <Heading sx={styles.heading}>{heading}</Heading>
        <Text sx={styles.text}>{text}</Text>
    </Flex>
}

export default FormHeader