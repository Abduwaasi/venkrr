import {Box, Flex} from "@chakra-ui/react"
import DescriptionWithBtn from "./descriptionWithBtn"

import Image from "next/image"

const AppFlex= ({leftImage, rightImage,heading,text})=>{
    return <Flex  flexDir={["column","column","row"]}  alignItems="center"w="100%" justifyContent="space-around" px={["1rem","1.5rem","2.5rem","4rem","6rem"]}>
        {leftImage && <Box w={["100%","100%","45%"]}  >
        <Image src={leftImage} alt="left Image"/>
        </Box>}
        <Box w={["100%","100%","42%"]} my={["5rem"]}>
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