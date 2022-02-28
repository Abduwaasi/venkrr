import {Box,Flex,Text,Icon} from "@chakra-ui/react"
import {FaUserPlus} from "react-icons/fa"

const NewSubscriber = ()=>{

    const styles = {
       container:{
        width: "100%",
        height: "167px",
        boxSizing:"border-box",
        bg: "#0275BB",
        borderRadius:" 26px",
        alignItems:"center",
        px:"2rem"
       },
       iconBox:{
        width: "84.81px",
        height: "84.81px",
        bg: "#5C92FF",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      
        
       },
       content:{
           flexDirection:"column",
           ml:"2rem"
       },
       number:{
        fontWeight:"bold",
        fontSize:"48px",
        lineHeight:"58px",
        color:"#ffffff"
       },
       subscriber:{
        fontWeight:"normal",
        fontSize:"17px",
        lineHeight:"21px",
        color:"#EDEFF2"
       },
    }
   return <Flex sx={styles.container}>
        <Box sx={styles.iconBox}>
            <Icon as={FaUserPlus} w="2rem" h="2rem" color="#fff"/>
        </Box>
        <Flex sx={styles.content}>
            <Text sx={styles.number}>20</Text>
            <Text sx={styles.subscriber}>New Subscribers</Text>
        </Flex>
    </Flex>
}

export default NewSubscriber