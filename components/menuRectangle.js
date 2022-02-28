import {Box,Flex,Icon,Text,Spacer} from "@chakra-ui/react"

import Image from "next/image"

const MenuRectangle = ({logo,homeIcon,home,settingIcon,setting,profileIcon,profile,logout,logoutIcon})=>{

    const styles = {
        container:{
            flexDir:"column",
            justifyContent:"center",
            alignItem:"center",
            // pl:"35px",
            bg: "#0275BB",
            borderRadius: "0px",
            boxSizing:"border-box",
            width:"100%",
            height:"100%",
            pt:"44px",
            pb:"87px"
        },
        iconWrapper:{
            flexDir:"column",
            gap:"5rem"
        },
        textWrapper:{

            alignItems:"center"
        },
        text:{
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "24px",
        color: "#FFFFFF",
        pl:"1rem"
        },
        homeBox:{
            width:"60px",
            height:"60px",
            bg:"#5C92FF",
            borderRadius:"15px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        box:{
            width:"60px",
            height:"60px",
            bg:"transparent",
            borderRadius:"15px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }
    }
    return <Flex sx={styles.container}>
        <Image src={logo} alt='Venkrr Logo'/>
        <Spacer/>
        <Flex sx={styles.iconWrapper}>
         <Flex sx={styles.textWrapper}>
             <Box sx={styles.homeBox}>
                 <Icon as={homeIcon} w="30px" h="30px" color='#fff'/>
             </Box>
             {home&&<Text sx={styles.text}>Home</Text>}
         </Flex>
         <Flex sx={styles.textWrapper}>
             <Box sx={styles.box}>
            <Icon as={settingIcon} w="30px" h="30px" color='#fff'/>
             </Box>
             {setting&&<Text sx={styles.text}>{setting}</Text>}
         </Flex>
         <Flex sx={styles.textWrapper}>
             <Box sx={styles.box}>
             <Icon as={profileIcon} w="30px" h="30px" color='#fff'/>
             </Box>
             {profile&&<Text sx={styles.text}>{profile}</Text>}
         </Flex>
        </Flex>
        <Spacer/>
        <Flex sx={styles.textWrapper}>
            <Box sx={styles.box}>
          <Icon as={logoutIcon} w="30px" h="30px" color='#fff'/>
            </Box>
          {logout &&<Text sx={styles.text}>{logout}</Text>}
        </Flex>
    </Flex>
}

export default MenuRectangle