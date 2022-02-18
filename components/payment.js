import {Box,Flex,Button,Text,Heading} from "@chakra-ui/react"
import DescriptionWithBtn from "./descriptionWithBtn"

const Payment = ()=>{
    return <Flex justifyContent="space-around" alignItems="center" flexDirection={["column",,"row"]} py="3rem" bg="#fbfbfb" px={["1rem","2rem","3rem","4rem"]}>
        <Box w={["100%",,"45%"]}>
            <DescriptionWithBtn
             heading="Cheap one time payment"
             text="You pay for Venkrr once and you can use it to create funnel new subscribers to grow your newsletter forever."
            />
        </Box>
        <Box w={["100%",,"45%"]}>
            <Box bg="#0275bb" border="1.5px solid #cacaca" boxShadow="inset 0px 0px 4px rgba(0, 0, 0, 0.25)" borderRadius="15px" p="1rem" display="flex" flexDir="column">
             <Heading fontWeight="600" fontSize="1.2rem" lineHeight="25px" mb="0.5rem" color="#fff">Lifetime deal</Heading>
             <Button alignSelf="flex-end" background="#fff" borderRadius="12px" fontWeight="600" fontSize="14px" lineHeight="32px" textAlign="center" color=" #0275BB">Choose this Plan</Button>
             <Heading fontWeight="600" fontSize="42px" lineHeight="32px" color="#fff">$37</Heading>
             <Text fontWeight="300" fontSize="14px" lineHeight="14px" textAlign="left" color="#fff" mt="0.3rem">Lifetime</Text>
            </Box>
        <Text fontStyle="italic" fontWeight="500" fontSize="14px" lineHeight="25px" color="#6EA43E" mt="0.3rem" textAlign="center"> All plans come with 100% money-back guarantee</Text>
        </Box>
    </Flex>
  
}

export default Payment