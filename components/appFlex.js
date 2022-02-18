import {Box, Flex} from "@chakra-ui/react"
import DescriptionWithBtn from "./descriptionWithBtn"

import Image from "next/image"

const AppFlex= ({leftImage, rightImage,heading,text})=>{
    return <Flex bg="#FBFBFB" flexDir={["column","column","row"]} py="3rem" alignItems="center"w="100%" justifyContent="space-around">
        {leftImage && <Box w={["100%","100%","45%"]} my="2rem">
        <Image src={leftImage} alt="left Image"/>
        </Box>}
        <Box w={["100%","100%","50%"]} my="2rem">
         <DescriptionWithBtn
           heading={heading}
           text={text}
           button="Get Started"
         />
        </Box>
       { rightImage&&<Box w={["100%","100%","45%"]} my="2rem">
        <Image src={rightImage} alt="right image"/>
        </Box>}
    </Flex>
}

export default AppFlex