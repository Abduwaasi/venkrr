import {Box,Flex,Spacer,Icon,Text} from "@chakra-ui/react"
import Image from "next/image"
import logo from "../public/static/whiteLogo.png"
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineYoutube} from "react-icons/ai"

const Footer = ()=>{
    return <Box bg="#151926"  py="1rem" px={["1rem","2rem","3rem","4rem"]} mt="2rem"  color="#fff" >
        <Flex  flexDirection={["column", "column","row"]} alignItems="center" justify="space-between">
        <Box maxWidth="150px" order="1">
        <Image src={logo} alt="footer logo"/>
        </Box>
        <Box order={["3",,,"2"]}>
            <Text fontSize="14px" lineHeight="24px" color="#D9DBE1" >&copy; {`${new Date().getFullYear()} `}Venkrr. All rights reserved</Text>
        </Box>
       
        <Flex order={["2",,,"3"]} py="1rem" >
            <Icon as={AiOutlineInstagram} color="#D9DBE1" w="2rem" h="2rem" />
            <Icon as={AiOutlineTwitter} color="#D9DBE1"   w="2rem" h="2rem" mx="0.5rem"/>
            <Icon as={AiOutlineYoutube} color="#D9DBE1" w="2rem" h="2rem"/>
        </Flex>
        </Flex>
    </Box>
    
}

export default Footer