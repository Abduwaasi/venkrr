import {Flex,Text,Avatar,Box} from "@chakra-ui/react"
import avatar from "../public/static/avatar.png"

const AppAvatar=()=>{

    const styles ={
        container:{
            width:"272px",
            height:"67px",
            boxSizing:"border-box",
            alignItems:"center"
        },
        name:{
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "24px",
        color: "#1E2C3D",
        },
        handle:{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#93B0C8"
        }
    }
    return <Flex sx={styles.container}>
          <Avatar size='lg' name='Isaac Williams'  src="https://bit.ly/kent-c-dodds'" mr="20px"/>
          <Box>
            <Text sx={styles.name}>Isaac Williams</Text>
            <Text sx={styles.handle}>@issaclliams</Text>
          </Box>
    </Flex>
}

export default AppAvatar