import {Flex,ButtonGroup,Spacer,Button,Box} from "@chakra-ui/react"
import Image from "next/image"
import logo from "../public/static/logo.png"

const Navbar = () =>{
    return (
     
        <Flex sx={styles.nav}>
         <Box w={["5rem","7rem","9rem"]}h="3rem" display="flex" justifyContent="center" alignItems="center">
          <Image src={logo} alt="venkrr logo" />
         </Box>
          <Spacer/>
          <ButtonGroup spacing={[1,2,3,4]}>
            <Button sx={styles.login} >Login</Button>
            <Button sx={styles.start}>Get started</Button>
          </ButtonGroup>
        </Flex>
     
    )

 
}
const styles = {
  nav:{
    px:["1rem","2rem","3rem","4rem"],
    backgroundColor:"#fff",
    boxShadow:" 0px 1px 0px #E5E9F2",
    py:"1rem",
    width:"100%",
    maxWidth:"1400px",
    mx:"auto",
    justifyContent:"space-between",
    alignItems:"center"
   
  },
 login:{
  fontWeight:"500",
  fontSize:["0.6rem","0.7rem","0.9rem"],
  lineHeight:"1.2rem",
  textAlign:"center",
  color:"#343d48",
  bg: "#F3FBFF",
  borderRadius: "6px",
  transition:"all 0.5s ease",
  _hover:{
    bg:"#0275BB",
    color:"#fff"
  }
 },
 start:{
  px: [1,2,3,4],
  background:" #0275BB",
  borderRadius: "6px",
  color: "#fff",
  textAlign:"center",
  transition:"all 0.4s ease",
  fontSize:["0.7rem","0.9rem","1rem"],
  _hover:{
    bg:"#0275BB"
  }
 }
}




export default Navbar