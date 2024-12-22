import { Request, Response } from "express";
import { getLanguagesServices } from "../services/languages";
import { commonConstants } from "../constants/commonConstants";

const getLanguages=async(req:Request,res:Response)=>{
    try{ 
        // TODO:validate this in the middleware its a string or not
        const languageName=req.query.languageName as string;
    
        const getLanguagesServicesResult= await getLanguagesServices(languageName);  
        if(getLanguagesServicesResult.status===commonConstants.LANGUAGE_NOT_FOUND){
            res.send(getLanguagesServicesResult.result); 
            return ;
        }
        res.send(getLanguagesServicesResult.result);    

    }catch(error:any){
        res.send(error.message);
    }
}

export {getLanguages};