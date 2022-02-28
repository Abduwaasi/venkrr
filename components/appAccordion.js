import { useState } from "react"
import {Box,Flex, Icon,Text} from "@chakra-ui/react"

const AppAccordion = ({array})=>{
    const styles = {

        textWrapper:{
           textAlign:"center",
           mt:"2rem",
           mb:"3rem"
        },
        itemWrapper:{
            width:"100%",
            flexDirection:"column",
            gap:"0.5rem"
        }
    }
    return (
        
            <Flex sx={styles.itemWrapper}>
                 {array.map((item)=>(
               <EachTerm id={item.id} {...item}/> 
                ))}
            </Flex>
    )
}

const EachTerm = ({term, info, downArrow,upArrow})=>{
    const [show, setShow] = useState(false)
    const styles = {
        wrapper:{
            width:"100%",
            flexDirection:"column",
            bg: "#EDEFF2",
            border: "1px solid #EDEFF2",
        },
        iconContainer:{
            justifyContent:"space-between",
            alignItems:"center",
            p:"0.4rem 1.2rem"
        },
        infoTitle:{
            fontWeight:"500",
            fontSize:"17px",
            lineHeight:"35px",
            letterSpacing:"-0.2px", 
            color: "#0F2137"
        },
        infoText:{
            px:"1.5rem",
            pb:"0.6rem",
            fontWeight:"normal",
            fontSize:"16px",
            lineHeight:"30px",
            color: "#343D48",
            opacity:"0.7"
        }
    }
    return <Flex sx={styles.wrapper}>
    
        <Flex sx={styles.iconContainer}>
            <Text sx={styles.infoTitle}>{term}</Text>
            <Box onClick={()=>setShow(!show)}>
             { upArrow && downArrow  && show ?  <Icon as={upArrow} w="1rem" h="1rem" />: <Icon as={downArrow} w="1rem" h="1rem" color="#0f2137"/>}
            </Box>
        </Flex>
        <Box sx={styles.infoText}>
           {(info && show) && <Text>{info}</Text>}
        </Box>
    </Flex>
}

export default AppAccordion