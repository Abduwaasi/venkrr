import {Flex,Text,Icon,Box} from "@chakra-ui/react"
import Image from "next/image"
import {GrFormCheckmark} from "react-icons/gr"
import {AiOutlineCaretDown} from "react-icons/ai"

import mailchimpLogo from "../public/static/mailchimp.png"

const Mailchimp = ()=>{

    const styles={
        container:{
        width:"100%",
        height:"88px",
        bg:"#fff",
        border: "1px solid #E8F4FF",
        boxSizing: "border-box",
        boxShadow: "0px 9px 12px rgba(0, 0, 0, 0.03)",
        borderRadius: "10px",
        alignItems:"center",
        pl:"24px",
        pr:"20px",
        gap:"20px"
        },
        mailchimp:{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#151926",
        },
        ellipse:{
            width:"14px",
            height:"14px",
            background: "#6EDF6C",
            borderRadius:"full",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#fff",
            ml:"0.8rem"
        },
        ellipseFlex:{
            alignItems:"center",
        }

    }
    return <Flex sx={styles.container}>
        <Image src={mailchimpLogo}/>
        {/* <Flex sx={styles.ellipseFlex}>
            <Text sx={styles.mailchimp}>Mailchimp</Text>
            <Box sx={styles.ellipse}>
             <Icon as={GrFormCheckmark} color="#ffffff" w="7px" h="5px"/>
            </Box>
        </Flex> */}
        <Icon as={AiOutlineCaretDown} color="#0F2137" width="1rem" height="1rem"/>
    </Flex>
}

export default Mailchimp