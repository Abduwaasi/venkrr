import {Flex, Box,Heading,Button,Text,Spacer} from "@chakra-ui/react"
import Image from "next/image"
import person from "../public/static/person1.png"
import DescriptionWithBtn from "./descriptionWithBtn"

const Newsletter = ()=>{
    return (

        <Flex sx={styles.container}  px={["1rem","1.5rem","2.5rem","4rem","7rem"]} >
            <Box sx={styles.leftBox} w={["100%","100%","48%"]} my="2rem">
                <Heading as="h4" sx={styles.heading} textAlign="left">Newsletter</Heading>
                <Flex w="100%" bg="#fbfbfb">
                 <Image src={person} alt="person"/>
                <Box sx={styles.details}>
                <Heading as ="h3" sx={styles.heading}>Groupleads folks</Heading>
                 <Text sx={styles.text}>Conversation, me & culture</Text>
                 <Text sx={styles.text}>@Groupleads, @ Chatsilo, @Sales...</Text>
                </Box>
                </Flex>
                <Button w="100%" textAlign="center" color="#0275BB" borderTopRadius="0">Subscribe</Button>
            </Box>
        
            <Box sx={styles.rightBox} w={["100%","100%","45%"]}>
               <DescriptionWithBtn
                heading="Use the Twitters new 
                Revue Badge to the 
                Max!!"
                text="Venkrr allows you use the twittter’s new Revue badge to the fullest by allowing you easily funnel new subscribers to the newsletter of your choice."
                button="Get Started"
               />
            </Box>
        </Flex>
    )

    }

const styles = {
    container:{
        py:"3rem",
        bg:"#fff", 
        flexDirection:["column","column","row","row"],
        justifyContent:"space-around",
        alignItems:"center"
        
    },
    leftBox:{
       
        bg:"#fff",
        borderRadius:"10px",
        boxShadow:"10px 15px 15px",
        py:"1rem",
        mb:"1rem"
    },
    leftBox:{
      
    },
    heading:{
        fontSize:"1.2rem",
        fontWeight:"700",
        lineHeight:"2rem",
        letterSpacing:"1px"
    },
    details:{
        p:"0.5rem",
        borderBottom:"1px solid #eee"
    },
    text:{
        fontWeight:"500",
        fontSize:"14px",
        lineHeight:"20px",
        color:"#5C7184"
    }
}

export default Newsletter