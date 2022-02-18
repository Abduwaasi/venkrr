import {Box,Flex,Text} from "@chakra-ui/react"
import Image from "next/image"
import DescriptionWithBtn from "./descriptionWithBtn"
import one from "../public/static/1.png"
import two from "../public/static/2.png"
import three from "../public/static/3.png"

const  Account = ()=>{
    return <Flex  flexDirection={["column","column","row"]} justifyContent="space-around" alignItems="center">
        <Box w={["100%",,"45%"]}>
         <Flex sx={styles.numberFlex}>
             <Box w="4rem" h="4rem" mr="1rem">
             <Image src={one} alt="one" />
             </Box>
             <Text>Create your Venkrr account</Text>
         </Flex>
         <Flex sx={styles.numberFlex}>
             <Box w="4rem" h="4rem" mr="1rem"> 
             <Image src={two} alt="two"/>
             </Box>
             <Text>Select your favourite newsletter tool</Text>
         </Flex>
         <Flex sx={styles.numberFlex}>
             <Box w="4rem" h="4rem" mr="1rem">
             <Image src={three} alt="three"/>
             </Box>
             <Text>Launch and Start growing</Text>
         </Flex>
    
        </Box>
        <Box w={["100%",,"45%"]}>
            <DescriptionWithBtn
            heading="Easy one time set up & Grow forever"
            text="You can set up Venkrr in just 5 minutes and you’ll be set up forever!"
            button="Get started"
            />
        </Box>
    </Flex>
}
const styles= {
    numberFlex:{
        alignItems:"center",
        my:"2rem"
    }
}

export default Account