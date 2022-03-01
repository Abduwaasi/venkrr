import {Box,Flex} from "@chakra-ui/react"
import DescriptionWithBtn from "./descriptionWithBtn"
import PaymentCard from "./paymentCard"

const Payment = ()=>{
    return <Flex justifyContent="space-around" alignItems="center" flexDirection={["column",,"row"]} py="3rem" bg="#fbfbfb" px={["1rem","1.5rem","2.5rem","4rem","6rem"]}>
        <Box w={["100%",,"45%"]}>
            <DescriptionWithBtn
             heading="Cheap one time payment"
             text="You pay for Venkrr once and you can use it to create funnel new subscribers to grow your newsletter forever."
            />
        </Box>
        <Box w={["100%",,"40%"]}>
           <PaymentCard/>
        </Box>
    </Flex>
  
}

export default Payment