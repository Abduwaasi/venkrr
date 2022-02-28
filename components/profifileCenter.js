import {Flex,Heading,Text,Box} from "@chakra-ui/react"
import Image from "next/image"
import avatar from "../public/static/avatar.png"

const ProfileCenter=()=>{

    const styles={
        container:{
        width: "448px",
        height:"356px",
        background: "#E5F1FB",
        borderRadius: "25px",
        flexDir:"column",
        justifyContent:"center",
        alignItems:"center"
        },
        heading:{
            fontWeight:"bold",
            fontSize:"30px",
            lineHeight:"36px",
            color:"#1E2C3D"
        },
        text:{
            fontWeight:"normal",
            fontSize:"20px",
            lineHeight:"24px",
            color:"#93B0C8"
        },
    }

    return <Flex sx={styles.container}>
        <Box borderRadius="full"  width="156px" height="156px" bg="#AEDDFF
" display="flex" justify="center" alignItems="start">
         <Image src={avatar} alt="avatar" width={140} height={140}/>
        </Box>
         <Box mt="2rem">
             <Heading sx={styles.heading}>Isaac Williams</Heading>
             <Text sx={styles.text}>@issaclliams</Text>
         </Box>
    </Flex>
}

export default ProfileCenter