import {Box} from "@chakra-ui/react"
import MenuRectangle from "../components/menuRectangle";
import logo from "../public/static/venkrrLogo.png"
import {AiFillHome,AiFillSetting,} from "react-icons/ai"
import {FaUser} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import AppAvatar from "../components/avatar"
import Mailchimp from "../components/mailchimp"
import NewSubscriber from "../components/newSubscriber";
import DashboardHeading from "../components/dashboardHeading";
import ProfileCenter from "../components/profifileCenter";
import AppInputGroup from "../components/inputGroup";
import {BiUser} from "react-icons/bi"
import DashboardForm from "../components/dashboardForm";
import DashboardRectangle from "../components/dashboardRectangle";
import NewsletterPlatform from "../components/newletterPlatform";
import MiddleBackground from "../components/middleBackground";

const Test = ()=>{
    return <Box>
        {/* <MenuRectangle
        homeIcon={AiFillHome}
        home="Home"
        settingIcon={AiFillSetting}
        setting="Settings"
        profileIcon={FaUser}
        profile="Profile"
        logoutIcon={FiLogOut}
        logout="Log out"
        
        />

        <AppAvatar/>
        <Mailchimp/>
        <NewSubscriber/>
        <DashboardHeading 
        heading="Settings"
         text="Select your favourite newsletter platform"
         />
         <ProfileCenter/> */}
         {/* <AppInputGroup
           htmlFor="password"
           label="Enter your password"
           id="password"
           type="password"
           icon={BiUser}
           placeholder="Revue API Key"
           helperText="You can find your API Key at the bottom of: getrevue.co/app/integrations"
         />
         <AppInputGroup
           htmlFor="name"
           label="Enter your name"
           id="name"
           type="text"
           placeholder="Name"
     
           helperText="Enter your full name here"
         /> */}
         <DashboardForm/>
         <DashboardRectangle  user="User" date="Date"/>

         <NewsletterPlatform noPlatform={true}/>
         <NewsletterPlatform mailchimp={true}/>
         <MiddleBackground>Hello world</MiddleBackground>
    </Box>
}

export default Test