import {Box,Button} from "@chakra-ui/react"
import Image from "next/image"
import Description from "./description"
import phone from "../public/static/phone.png"
const Header = ()=>{

    return(
        <Box sx={styles.container} px={["1rem","2rem","3rem","4rem"]}>
         <Description 
          heading="Convert existing & new Twitter fans into Leads & Paying Customers"
          subheading="Venkrr allows you to create Twitter Funnels in Minutes"
         />
         <Button sx={styles.button}>Get started for free</Button>
         <Image src={phone} alt="Mask group "/>
        </Box>
    )
}

const styles = {
    container:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      py:"3rem"
    },
    button:{
     background: "#0275BB",
     boxShadow: "0px 10px 10px rgba(25, 62, 84, 0.2)",
     borderRadius: "8px",
     color:"#fff",
     fontSize: "14px",
     lineHeight: "24px", 
     color: "#FFFFFF",
     my:"2rem"
    }
}
export default Header