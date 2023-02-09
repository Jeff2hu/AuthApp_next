import Head from "next/head"
import Layout from "../layout/layout"
import Input from "../components/input"
import Button from "../components/button"
import Link from "next/link"
import { signIn } from 'next-auth/react';
import { useFormik } from "formik"
import { loginValidate } from "../lib/vaildate"
import { useRouter } from "next/router"

import { HiAtSymbol,HiFingerPrint } from 'react-icons/hi';
import googleImage from '../public/assets/google.svg'
import githubImage from '../public/assets/github.svg'

export default function Login(){

  const router = useRouter();

  const SignInHandler = async(platform,value) => {
    switch(platform){
      case "google":
        return await signIn("google",{callbackUrl:"http://localhost:3000"})
      case "github":
        return await signIn("github",{callbackUrl:"http://localhost:3000"})
      case "normal":
        const status = await signIn("credentials",{
          redirect: false,
          email: value.email,
          password: value.password,
          callbackUrl: "/"
        })
        if(status.ok) router.push(status.url)
    }
  }

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate: loginValidate,
    onSubmit: async(_value) => {
      SignInHandler("normal",_value)
    }
  })

  return(
    <Layout>

      <Head>
        <title>Login</title>
      </Head>
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold">Sign In</h2>
        <p className="text-sm py-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut?</p>
        <form className="flex flex-col justify-center items-end gap-3" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-8 my-3 w-full">
            <div className={style.inputContainer}>
              <p className={style.validText}>{formik.errors.email && formik.touched.email?formik.errors.email:""} </p>       
              <Input 
                id="email"
                label={true}
                style={formik.errors.email && formik.touched.email ? style.validInput :""}
                {...formik.getFieldProps("email")}
              />
              <span className={style.inputImage}>
                <HiAtSymbol size={20}/>
              </span>
            </div>
            <div className={style.inputContainer}>
              <p className={style.validText}>{formik.errors.password && formik.touched.password?formik.errors.password:""} </p>  
              <Input 
                id="password"
                label={true}
                style={formik.errors.password && formik.touched.password ? style.validInput :""}
                type="password"
                {...formik.getFieldProps("password")}
              />
              <span className={style.inputImage}>
                <HiFingerPrint size={20}/>
              </span>
            </div>
          </div>
          
          <Button 
            text="Login" 
            style="mx-auto" 
            buttonType="normal"
            type="submit"
          />
          <Button 
            text="SignIn With Google" 
            style="mx-auto" 
            buttonType="google" 
            image={{src:googleImage,h:20,w:20}}
            callBack={()=>{
              SignInHandler("google")}
            }
          />
          <Button 
            text="SignIn With GitHub" 
            style="mx-auto" 
            buttonType="github" 
            image={{src:githubImage,h:20,w:20}} 
            callBack={()=>{
              SignInHandler("github")}
            }
          />
        </form>
        <p className="mt-3">Don't have an account yet?<Link href={"/register"} className="text-sky-600 font-bold ml-2 hover:cursor-pointer">Click Here!</Link></p>
      </div>

    </Layout>
  )
}

const style = {
  inputContainer: "flex justify-between items-center w-full relative group",
  inputImage: "absolute top-3.5 right-2 group-hover:text-red-400 transition",
  validText: "text-sm text-red-500 absolute -top-5 left-32",
  validInput: "border-red-600 border-2"
}