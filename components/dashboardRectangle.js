import {Flex,Text} from "@chakra-ui/react"

const DashboardRectangle=({user, date})=>{

    const styles={
        container:{      
        height:" 51px",
        width:"100%",
        background: "#E5F1FB",
        borderRadius: "20px",
        boxSizing:"border-box",
        alignItems:"center",
    
       },
       user:{
        flex:3/4,
        pl:"82px",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "24px",
        color: "#0F2137"

       },
       date:{
           flex:1/4,
           pl:"82px",
           fontStyle: "normal",
           fontWeight: "500",
           fontSize: "20px",
           lineHeight: "24px",
           color: "#0F2137"

       }

     
    }
    return <Flex sx={styles.container}>
        {user && <Text sx={styles.user}>{user}</Text>}
        {date && <Text sx={styles.date}>{date}</Text>}
    </Flex>
}

export default DashboardRectangle