import {Flex,Text,Box,Icon} from "@chakra-ui/react"
import Image from "next/image"
import logo from "../public/static/mailchimpLogo.png"
import {AiOutlineCaretDown} from "react-icons/ai"


const NewsletterPlatform =({noPlatform, mailchimp})=>{
  const styles={
    container:{
      width:"100%",
      bg: "#E5F1FB",
      borderRadius: "29px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      py:"19px",
      pl:"24px",
      pr:"38px",
      my:"3rem",
      bg:"transparent"
     
    },
    box:{
      width:"50px",
      height:"50px",
      borderRadius:"full",
      bg:"#93B0C8"
    },
    imgWrapper:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      ml:"2rem",
      fontWeight:"500",
     fontSize:"20px",
     lineHeight:"24px",
      color: "#151926",
    }
  }
 
return <Flex sx={styles.container}>
  {noPlatform && <Flex sx={styles.imgWrapper}>
     <Box sx={styles.box}/>
     <Text sx={styles.text}>Newsletter platform</Text>
   </Flex>}
  {mailchimp && <Flex sx={styles.imgWrapper}>
     <Image src={logo} alt="mailchimp logo" width={50} height={50}/>
     <Text sx={styles.text}>Mailchimp</Text>
   </Flex>}
  <Icon as={AiOutlineCaretDown} width="1.2rem" height="1rem" color="#0F2137" />
</Flex>
}


export default NewsletterPlatform
    



