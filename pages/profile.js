import {Flex,Box,VStack} from "@chakra-ui/react"
import MenuRectangle from "../components/menuRectangle";
import MiddleBackground from "../components/middleBackground"
import AppAvatar from "../components/avatar";
import DashboardHeading from "../components/dashboardHeading";
import Mailchimp from "../components/mailchimp";

import venkrrLogo from "../public/static/fullLogo.png"
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import NewsletterPlatform from "../components/newletterPlatform";
import DashboardForm from "../components/dashboardForm";
import ProfileCenter from "../components/profifileCenter";

export const Profile = ()=>{
    return <Flex w="100vw">
        <Box w="21vw" h="1096px">
         <MenuRectangle 
         logo={venkrrLogo}
         homeIcon={AiFillHome}
         home="Home"
         settingIcon={AiFillSetting}
         setting="Settings"
         profileIcon={FaUser}
         profile="Profile"
         logoutIcon={FiLogOut}
         logout="Log out"
         />
        </Box>
       
         <MiddleBackground>
         <Box w="79vw" boxSizing="border-box" pl="58px" pr="34px" pt="45px" h="1096px">
            <Flex justify="space-between" align="center">
              <Box><AppAvatar/></Box>
              <Box w="290px"><Mailchimp/></Box> 
            </Flex>
            <Box mb="43px">
            <DashboardHeading heading="Profile"/>
            </Box>  
            <Box display="flex" justifyContent="center" alignItems="center" mt="10rem">
                <ProfileCenter/>
            </Box>      
        </Box>
         </MiddleBackground>
    </Flex>
}

export default Profile