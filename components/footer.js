import {Box,Flex,Spacer,Icon,Text} from "@chakra-ui/react"
import Image from "next/image"
import logo from "../public/static/whiteLogo.png"
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineYoutube} from "react-icons/ai"

const Footer = ()=>{
    return <Box bg="#151926"  py="1rem" px={["1rem","2rem","3rem","4rem"]} mt="2rem"  color="#fff" >
        <Flex flexDir="space-between" flexWrap="wrap">
        <Image src={logo} alt="footer logo"/>
        <Spacer/>
        <Box>
            <Text fontSize="14px" lineHeight="24px" color="#D9DBE1">&copy; {`${new Date().getFullYear()} `}Venkrr. All rights reserved</Text>
        </Box>
        <Spacer/>
        <Flex>
            <Icon as={AiOutlineInstagram} color="#D9DBE1" w="1.4rem" h="1.4rem" />
            <Icon as={AiOutlineTwitter} color="#D9DBE1" w="1.4rem" h="1.4rem" mx="0.5rem"/>
            <Icon as={AiOutlineYoutube} color="#D9DBE1" w="1.4rem" h="1.4rem"/>
        </Flex>
        </Flex>
    </Box>
    
}

export default Footer