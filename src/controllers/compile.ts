import { Request, Response } from "express";
import { compileCodeService } from "../services/compile";

const compileCode=async(req:Request,res:Response)=>{
    try{
        let {language,code,input}=(req.body);
        let result =await compileCodeService(language,code,input);
        res.send(result );
    }catch(error:any){
        console.log("before");
        console.log(error,"std error");
        res.send({error:error.message});
    }
    
}

export {compileCode};