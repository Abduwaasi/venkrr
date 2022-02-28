import {Flex,Button} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import AppInputGroup from "./inputGroup"
import {BsFillLockFill} from "react-icons/bs"

const DashboardForm = ()=>{ 
    const styles={
         container:{
             width:"100%",
             maxWidth:"847px",
             borderRadius:"10px",
             color:"#fff",
             px:"2.6rem",
             py:"1.2rem"
         },
        button:{
            background:"#0275BB",
            borderRadius: "10px",
            fontWeight: "600",
           fontSize: "18px",
           lineHeight: "25px",
           textAlign: "center",
           letterSpacing: "-0.04em",
           color:"#FFFFFF",
           w:"full",
           mt:"1rem"
           },
      
    }
    const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function submit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }


    return <Flex sx={styles.container}>
        <form onSubmit={handleSubmit(submit)}>
          <Flex flexDir="column" my="1rem">
            <AppInputGroup
            htmlFor="apiKey"
            label="Revue API"
            id="apiKey"
            type="password"
            icon={BsFillLockFill}
            placeholder="Revue API Key"
            helperText="You can find your API Key at the bottom of: getrevue.co/app/integrations"
            />
          </Flex>
          <Flex flexDir="column" my="1rem">
            <AppInputGroup
            htmlFor="mailchimpApi"
            label="Mailchimp Api"
            id="mailchimpApi"
            type="password"
            icon={BsFillLockFill}
            placeholder="Mailchimp API "
            helperText="You can find your API Key here: https://us1.admin.mailchimp.com/account/api/"
            />
          </Flex>
          <Flex flexDir="column" my="1rem">
            <AppInputGroup
            htmlFor="audienceId"
            label="Audience ID"
            id="audienceId"
            type="password"
            icon={BsFillLockFill}
            placeholder="Mailchimp Audience ID "
            helperText="You can find your Audience ID here: https://mailchimp.com/help/find-audience-id/"
            />
          </Flex>
      <Button sx={styles.button}isLoading={isSubmitting} type='submit'>Save changes</Button>
        </form>
    </Flex>
}

export default DashboardForm