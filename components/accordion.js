import { useState } from "react"
import {Box,Flex,Text,Icon,Button, background} from "@chakra-ui/react"
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai"
import Description from "./description"
import questions from "../utils/data"

const Accordion = ()=>{
    return <Box w="100%" maxW="800px" display="flex" flexDirection="column"justifyContent="center" alignItems="center" mx="auto" px={["5px","2rem","3rem","4rem"]} py="3rem">
       <Description 
       heading="Questions and Answers"
       subheading="Frequent questions asked about Venkrr"
       />
       {questions.map((query)=>(
           <Question query={query} key={query.id}/>
       ))}
       <Button w={["100%","100%","70%"]} background="#0275BB" borderRadius="8px" fontWeight="normal"fontSize={["10px","14px"]} lineHeight="16px" color="#fff" mt="2rem" _hover={{background:"#0275bb"}}>Didn’t find the answer you are looking for? Check out more questions. </Button>
    </Box>
}

const Question = ({query:{question, answer}})=>{
    const [show, setShow] = useState(false)
    return <Box w="100%" my="0.4rem">
        <Flex justifyContent="space-between" align-items="center" bg="#fff" boxShadow="0px 13.8611px 55.4444px #F2F5FA" borderRadius="8.31667px" px="1rem" py="0.4rem" >
            <Text fontWeight="500" fontSize="1rem" lineHeight="2rem" letterSpacing="-0.2px" color="#0F2137">{question}</Text>
            <Box onClick={()=>setShow(!show)} variant="outline" border="none">
             {show ?  <Icon as={AiOutlineUp} w="1rem" h="1rem" />: <Icon as={AiOutlineDown} w="1rem" h="1rem" />}
            </Box>
        </Flex>
        <Box bg="#fff" px="1rem">
           {show && <Text fontSize="1rem" lineHeight="2rem" letterSpacing="-0.2px" color="#0F2137">{answer}</Text>}
        </Box>
    </Box>

}



export default Accordion