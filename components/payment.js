import {Box,Flex} from "@chakra-ui/react"
import DescriptionWithBtn from "./descriptionWithBtn"
import PaymentCard from "./paymentCard"

const Payment = ()=>{
    return <Flex justifyContent="space-around" alignItems="center" flexDirection={["column",,"row"]} py="3rem" bg="#fbfbfb" px={["1rem","2rem","3rem","4rem"]}>
        <Box w={["100%",,"45%"]}>
            <DescriptionWithBtn
             heading="Cheap one time payment"
             text="You pay for Venkrr once and you can use it to create funnel new subscribers to grow your newsletter forever."
            />
        </Box>
        <Box w={["100%",,"45%"]}>
           <PaymentCard/>
        </Box>
    </Flex>
  
}

export default Payment