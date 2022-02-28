import {Box,Flex,Heading,Text} from "@chakra-ui/react"

import PaymentCard from "../components/paymentCard"


const Pricing = ()=>{
    const styles = {
        container:{
            width:"100%",
            maxWidth:"1440px",
            mx:"auto",
            display:"flex",
            flexDirection:"column",
            // justifyContent:"center",
            alignItems:"center",
            height:"700px"
        },
        paymentCard:{
            maxWidth:"624px",
            mt:"3.2rem"
        },
        pricingHeading:{
            fontWeight:"600",
            fontSize:"50px",
            lineHeight:"60px",
            textAlign:"center",
            color:"#000000",
            mb:"26px"
        },
        pricingSubheading:{
            fontWeight:"normal",
            fontSize:"25px",
            lineHeight:"25px",
            textAlign:"center",
            color:"#000000"
        },

       
    }

    return (
        <Box sx={styles.container}>
            
             <Box sx={styles.paymentCard}>
              <Box textAlign="center">
              <Heading as ="h2" sx={styles.pricingHeading}> Ready to get started with Venkrr? </Heading>
              <Text as ="p" sx={styles.pricingSubheading}>Choose the package that suits you</Text>
              <Flex my="2.5rem" justify="center" alignItems="center">
                  <Text>Monthly</Text>
                  <Text>Yearly</Text>
              </Flex>
              </Box>
              <PaymentCard/>

             </Box>
        </Box>
    )
}


export default Pricing