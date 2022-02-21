import {Box,Button} from "@chakra-ui/react"
import Image from "next/image"
import Description from "./description"
import phone from "../public/static/Mockup.png"

const Header = ()=>{

    return(
        <Box sx={styles.container} px={["1rem","2rem","3rem","4rem","5rem"]}>
        <Box w={["100%",,,"90%"]}> 
         <Description 
          heading="Convert existing & new Twitter fans into Leads & Paying Customers"
          subheading="Venkrr allows you to create Twitter Funnels in Minutes"
         />
        </Box>
        <Button sx={styles.button}>Get started for free</Button>
         <Image src={phone} alt="Mask group " width={600} height={600}/>
        </Box>
    )
}

const styles = {
    container:{
        bgImage:"url('../public/static/patters.png')",
        bgPosition:"cover",
        bgRepeat:"no-repeat",
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
     fontSize: "16px",
     lineHeight: "24px", 
     color: "#FFFFFF",
     px:["1rem",,"1.5re","2rem",,"4rem"],
     my:"2rem"
    }
}
export default Header