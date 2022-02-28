import {FormControl,FormLabel,FormHelperText,Input,Icon,InputGroup,InputLeftElement,Flex} from '@chakra-ui/react'
import {BiUser} from "react-icons/bi"

const AppInputGroup = ({htmlFor,label,id,type,helperText,placeholder,icon})=>{

  const styles ={
    label:{
      fontWeight:"500",
      fontSize:"20px",
      lineHeight:"25px",
      letterSpacing:"-0.04rem",
      color:"#374555"
    },
    inputFlex:{
      justify:"center",
      align:"center",
      position:"relative"
    },
    icons:{
      width:"1rem",
      height:"1.1rem",
      color:"#0275BB",
      position:"absolute",
      left:"1rem"
    },
    input:{
      w:"100%",
      pl:"2.5rem",
      fontWeight:"300",
      fontSize:"20px",
      lineHeight:"25px",
      letterSpacing:"-0.04rem",
      color:"#93B0C8",
      bg: "#FFFFFF",
      border:"1px solid #E8F4FF",
      boxSizing: "border-box",
      borderRadius: "10px"
    },
    helperText:{
      fontWeight:"300",
      fontSize:"17px",
      lineHeight:"25px",
      letterSpacing:"-0.04rem",
      color:"#59748A",
      pl:"1rem"
    }
  }
    return <FormControl>
    <FormLabel htmlFor={htmlFor} sx={styles.label}>{label}</FormLabel>
    <Flex sx={styles.inputFlex}>
    <Icon as={icon}  width="1rem"
      height="1.1rem"
      color="#0275BB"
      position="absolute"
      left="1rem"/>
    <Input id={id} type={type} placeholder={placeholder} sx={styles.input}/>
    </Flex>
    <FormHelperText sx={styles.helperText}> <Icon as={BiUser} mr="0.6rem"/>{helperText}</FormHelperText>
  </FormControl>
}



export default AppInputGroup