import {Box} from "@chakra-ui/react"

const MiddleBackground=({children})=>{
    const styles ={
        container:{
           width:"100%",
           height:"100%",
           bg:"#FBFCFD",
           borderRadius:"51px"
        }
    }
  return <Box sx={styles.container}>{children}</Box>
}

export default MiddleBackground