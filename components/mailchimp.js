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
        }

    }
    return <Flex sx={styles.container}>
        <Image src={mailchimpLogo} alt="mailchimp logo"/>

        <Icon as={AiOutlineCaretDown} color="#0F2137" width="1rem" height="1rem"/>
    </Flex>
}

export default Mailchimp