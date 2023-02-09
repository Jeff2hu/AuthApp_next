import { useState } from "react"
import Head from "next/head"
import Layout from "../layout/layout"
import Input from "../components/input"
import Button from "../components/button"
import Link from "next/link"
import { useFormik } from "formik"
import { registerValidate } from "../lib/vaildate"
import axios from "axios"
import { useRouter } from "next/router"

import { HiAtSymbol,HiFingerPrint,HiOutlineUser } from 'react-icons/hi';

export default function Register(){

  const router = useRouter();
  const [ showPassword, setShowPassword ] = useState(false)

  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      cpassword:""
    },
    validate: registerValidate,
    onSubmit: async(value) => {
      await axios.post("http://auth-app-next.vercel.app/api/auth/signup",value)
      .then(res => {
        const { code, message } = res.data;
        if(code==="0000") router.push("/")
        else throw new Error(message)
      })
      .catch(err => {
        const { error } = err.response.data;
        alert(error)
        throw new Error(error)
      })
    }
  })


  return(
    <Layout>

      <Head>
        <title>Register</title>
      </Head>
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold">Register</h2>
        <p className="text-sm py-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut?</p>
        <form className="flex flex-col justify-center items-end gap-6" onSubmit={formik.handleSubmit}>
          <div className={style.inputContainer}>
            <p className={style.validText}>{formik.errors.name && formik.touched.name?formik.errors.name:""} </p>       
            <Input 
              id="name"
              {...formik.getFieldProps("name")}
              style={formik.errors.name && formik.touched.name ? style.validInput :""}
            />
            <span className={style.inputImage}>
              <HiOutlineUser size={20}/>
            </span>
          </div>
          <div className={style.inputContainer}>
            <p className={style.validText}>{formik.errors.email && formik.touched.email?formik.errors.email:""} </p>       
            <Input 
              id="email"
              {...formik.getFieldProps("email")}
              style={formik.errors.email && formik.touched.email ? style.validInput :""}
            />
            <span className={style.inputImage}>
              <HiAtSymbol size={20}/>
            </span>
          </div>
          <div className={style.inputContainer}>
            <p className={style.validText}>{formik.errors.password && formik.touched.password?formik.errors.password:""} </p>       
            <Input 
              id="password" 
              type={showPassword?"text":"password"}
              {...formik.getFieldProps("password")}
              style={formik.errors.password && formik.touched.password ? style.validInput :""}
            />
            <span className={style.inputImage}>
              <HiFingerPrint size={20}/>
            </span>
          </div>
          <div className={style.inputContainer}>
            <p className={style.validText}>{formik.errors.cpassword && formik.touched.cpassword?formik.errors.cpassword:""} </p>       
            <Input 
              id="cpassword" 
              type={showPassword?"text":"password"}
              {...formik.getFieldProps("cpassword")}
              style={formik.errors.cpassword && formik.touched.cpassword ? style.validInput :""}
            />
            <span className={style.inputImage}>
              <HiFingerPrint size={20}/>
            </span>
          </div>
          <div className={style.inputContainer}>
            <Button 
              text="Login" 
              style="px-20 ml-16" 
              buttonType="normal"
              type="submit"
            />
            <div className="flex flex-col group justify-between ">
              <label className="text-sm group-hover:text-slate-500 group-hover:scale-110 transition-all">{showPassword?"Hide":"Show"}</label>
              <input 
                type="radio"
                className="group-hover:scale-125 transition-all cursor-pointer"
                onClick={()=>{
                  setShowPassword(!showPassword)
                }}
                onChange={()=>null}
                checked={showPassword===true}
              />
            </div>
          </div>
          
        </form>
        <p className="mt-3">Already have an account ?<Link href={"/login"} className="text-sky-600 font-bold ml-2 hover:cursor-pointer">Click Here!</Link></p>
      </div>

    </Layout>
  )
}

const style = {
  inputContainer: "flex justify-between w-full relative group",
  inputImage: "absolute top-3.5 right-2 group-hover:text-red-400 transition",
  validText: "text-sm text-red-500 absolute -top-5 left-32",
  validInput: "border-red-600 border-2"
}