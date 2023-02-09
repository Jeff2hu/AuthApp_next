import { hash } from "bcryptjs";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";

export default async function handler(req,res){
  connectMongo().catch(err => res.json(err))

  if(req.method==="POST"){
    if(!req.body){
      return res.status(404).json({error:"Don't have form data!"})
    }else{
      const { name, email, password } = req.body;
      const checkExisting = await Users.findOne({email})
      
      if(checkExisting){
        return res.status(422).json({error:"Email has already been registered!"})
      }else{
        Users.create({name,email,password:await hash(password,12)},function(err,data){
          if(err){
            res.status(404).json({err})
          }else{
            res.status(200).json({message:"Register success!",code:"0000",data})
          }
        })
      }

    }
  }else{
    return res.status(500).json({error:"HTTP method not valid only POST Accepted!"})
  }
} 