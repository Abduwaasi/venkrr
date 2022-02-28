import { Flex,Text,Heading } from "@chakra-ui/react";

const DashboardHeading =({heading,text})=>{
    const styles={
      container:{
        flexDirection:"column",
        alignItems:"start",
      },
      headings:{
        fontWeight:"500",
        fontSize:"36px",
        lineHeight:"54px",
        color:"#000000"
      },
      texts:{
        fontWeight:"500",
        fontSize:"18px",
        lineHeight:"24px",
        color:"#151926"
      
      },
    }
    return <Flex sx={styles.container}>
        <Heading as="h3" sx={styles.headings}>{heading}</Heading>
        {text &&<Text sx={styles.texts}>{text}</Text>}
    </Flex>
}

export default DashboardHeading