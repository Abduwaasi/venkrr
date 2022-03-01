import {
    FormControl,
     Input,
    FormErrorMessage,
    Button,
    Box,
    VStack,
    InputGroup,
    InputLeftElement,
    Text
  } from '@chakra-ui/react'
import Image from "next/image"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import {MdEmail} from "react-icons/md"
import {TiLockClosed} from "react-icons/ti"
import logo from "../public/static/logo.png"
import FormHeader from "../components/formHeader"

const Signup = ()=>{
    const styles = {
        container:{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            width:"100%",
            minHeight:"100vh",
            py:"7rem",
            maxWidth:"1440px",
            px:["1rem","1.4rem","2rem","3rem","4rem","5rem"],
            mx:"auto",
            bg:"linear-gradient(220.57deg, #EDEFF2 23.06%, #E7FFD2 99.15%)"
        },
        logoContainer:{
          mb:"3rem"  
        },
        formContainer:{
            width:"100%",
            maxWidth:"575px",
            bg:"#FFFFFF",
            borderRadius:"10px",
            px:"1.5rem",
            pb:"3rem"
        },
        input:{
        bg: "#FFFFFF",
        py:"0.7rem",
        border:"1px solid #E8F4FF",
        boxSizing: "border-box",
        borderRadius: "10px",
        fontWeight: "500",
        fontSize: "17px",
       lineHeight: "25px",
      letterSpacing: "-0.04em",
      color: "#374555",
      transition:"0.3s all ease",
      outline:"none",
      _focus:{
        outline:"2px solid #E8F4FF",
        border:"none"
      },
      placeholder:{
       fontWeight: "500",
       fontSize: "17px",
       lineHeight: "25px",
       letterSpacing: "-0.04em",
       color: "#374555" 
      }
        },
        button:{
         background:"#0275BB",
         borderRadius: "10px",
         fontWeight: "600",
        fontSize: "17px",
        lineHeight: "25px",
        textAlign: "center",
        letterSpacing: "-0.04em",
        color:"#FFFFFF",
        w:"full",
        mt:"1rem"
        },
        bottomText:{
        fontSize: "17px",
        lineHeight: "25px",
        textAlign: "center",
        color: "#59748A",
        w:"100%",
        mt:"2rem"
        }
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
    return <Box sx={styles.container}>
        <Box sx={styles.logoContainer}>
         <Image src={logo} alt="Venkrr Logo" w={158} h={48}/>
        </Box>
        <Box sx={styles.formContainer}>
            <Box mt="2rem" mb="3rem">
            <FormHeader heading="Sign up to Venkrr" text="Enter your credentials to create your account"/>
            </Box>
        <form onSubmit={handleSubmit(submit)}>
            <VStack spacing="2rem">    
            <FormControl>
                <InputGroup>
                 <InputLeftElement
                  pointerEvents='none'
                  children={[<MdEmail color='#0275bb' />]}
                />
                <Input
                type="text"
                id="fullName" 
                placeholder="Enter your full name"
                sx={styles.input} 
                {...register('fullName', {
                    required: 'This is required',
                    minLength: { value: 10, message: 'Minimum length should be 10' },
                  })}
                />
                </InputGroup>
         <FormErrorMessage>
          {errors.email && errors.email.message}
         </FormErrorMessage>
      </FormControl>
      <FormControl>
                <InputGroup>
                 <InputLeftElement
                  pointerEvents='none'
                  children={[<MdEmail color='#0275bb' />]}
                />
                <Input
                type="email"
                id="email" 
                sx={styles.input} 
                placeholder="Enter your email"
                {...register('email', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
                </InputGroup>
         <FormErrorMessage>
          {errors.email && errors.email.message}
         </FormErrorMessage>
      </FormControl>
     <FormControl>
         <InputGroup>
          <InputLeftElement
             pointerEvents='none'
             children={[<TiLockClosed color='#0275bb' />]}
           />
         <Input
            type="password" 
            id="password"  
            sx={styles.input}
            placeholder="Enter your password"
            {...register('password', {
              required: 'This is required',
             minLength: { value: 8, message: 'Minimum length should be 8' },
               })}
                />
         </InputGroup>
         <FormErrorMessage>
          {errors.password && errors.password.message}
         </FormErrorMessage>
    </FormControl>
     <FormControl>
         <InputGroup>
          <InputLeftElement
             pointerEvents='none'
             children={[<TiLockClosed color='#0275bb' />]}
           />
         <Input
            type="password" 
            id="confirmPassword"  
            sx={styles.input}
            placeholder="Repeat your password"
            {...register('password', {
              required: 'This is required',
             minLength: { value: 8, message: 'Minimum length should be 8' },
               })}
                />
         </InputGroup>
         <FormErrorMessage>
          {errors.password && errors.password.message}
         </FormErrorMessage>
    </FormControl>
      <Button sx={styles.button} isLoading={isSubmitting} type='submit'>Sign</Button> 
        </VStack>
    </form>
    </Box>
     <Text sx={styles.bottomText}>Already have an account? <Link href="/login" passHref={true}><a style={{color:"#0275BB"}}>Log in</a></Link></Text>
    </Box>
}

export default Signup