import Head from 'next/head'
import {Box} from "@chakra-ui/react"
import Header from '../components/header'
import Newsletter from "../components/newsletter"
import Accordion from "../components/accordion"
import rafiki from "../public/static/Tweetstorm-rafiki 1.png"
import Logos from "../public/static/Logos.png"
import cuate from "../public/static/cuate.png"
import AppFlex from '../components/appFlex'
import Account from '../components/createAccount'
import Payment from '../components/payment'



export default function Home() {
  return (
    <>
    <Head>
      <title>venkrr</title>
    </Head>
    <Box w="100%" maxWidth="1440px">
      <Header/>
      <Newsletter/>
      <AppFlex 
       rightImage={rafiki}
       heading="Create Twitter Funnels super fast" 
       text="Venkrr allows you create Funnel new subscribers to your newsletter in just five minutes."/>
       <Account/>
       <Payment/>
      <AppFlex 
      rightImage={Logos}
      heading="Use your favourite integration tool"
      text="Venkrr integrates with the most popular newsletter tools. New integrations are added weekly! "
      />
      <AppFlex 
      leftImage={cuate}
      heading="Grow your newsletter subscribers"
      text="Venkrr helps you grow your subscriber list. When somebody subscribes via your Twitter profile, they will automatically be added to your newsletter tool of choice! "
      />
   
    <Accordion/>
    </Box>
      
    </>
  )
}
