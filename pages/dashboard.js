import {Flex,Box,VStack} from "@chakra-ui/react"
import MenuRectangle from "../components/menuRectangle";
import MiddleBackground from "../components/middleBackground"
import AppAvatar from "../components/avatar";
import DashboardHeading from "../components/dashboardHeading";
import NewSubscriber from "../components/newSubscriber"
import DashboardRectangle from "../components/dashboardRectangle";
import Mailchimp from "../components/mailchimp";


import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from "../public/static/venkrrLogo.png"


export const Dashboard = ()=>{
    return <Flex w="100vw">
        <Box w="13vw" h="1096px">
         <MenuRectangle 
         homeIcon={AiFillHome}
         settingIcon={AiFillSetting}
         profileIcon={FaUser}
         logoutIcon={FiLogOut}
         logo={logo}
         w="120"
         h="60"
         />
        </Box>
       
         <MiddleBackground>
         <Box w="100%" boxSizing="border-box" pl="58px" pr="34px" pt="45px" h="1096px">
            <Flex justify="space-between" align="center">
              <Box><AppAvatar/></Box>
              <Box w="290px"><Mailchimp/></Box> 
            </Flex>
            <Box mb="43px">
            <DashboardHeading heading="Activities"/>
            </Box>
            <Box w="411px" mb="8.625rem" mt="2rem">
                <NewSubscriber/>
            </Box>
            <VStack spacing="3.1rem">
                <DashboardRectangle user="User" date="Date"/>
                <DashboardRectangle/>
                <DashboardRectangle/>
                <DashboardRectangle/>
            </VStack>
        </Box>
         </MiddleBackground>
    </Flex>
}

export default Dashboard