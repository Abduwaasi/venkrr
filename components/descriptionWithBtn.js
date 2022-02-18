import {Flex,Heading,Text,Button} from "@chakra-ui/react"
import {AiOutlineArrowRight} from "react-icons/ai"

const DescriptionWithBtn = ({heading, text, button})=>{
 return <Flex
  sx={styles.container}>
     <Heading as="h2">{heading}</Heading>
     <Text sx={styles.text}>{text}</Text>
    { button && <Button sx={styles.button} rightIcon={<AiOutlineArrowRight/>}>{button}</Button>}
 </Flex>
}

const styles = {
    container:{
        flexDirection:"column",
        alignItems:"flex-start",
        width:"100%"
       
       
    },
    heading:{
        fontWeight:"800",
        fontSize:["1.5rem","2.5rem","3rem"],
        color:"#1E2C3D",
        lineHeight:["1rem","2rem","3rem","4rem"],
        mb:"1.5rem",
    },
    text:{
        fontWeight:"normal",
        fontSize:["0.9rem",,,"1rem"],
        lineHeight:"26px",
        color: "#0F2137",
        mb:"1rem"
    
    },
    button:{
    px:"1.4rem",
    py:"0.9rem",
    border: "1px solid #0F2137",
    borderRadius:"6px",
    variant:"transparent"
 }
}

export default DescriptionWithBtn