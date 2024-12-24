import { Request, Response } from "express";
import { addLanguagesServices, getLanguagesServices, updateLanguageService } from "../services/languages";
import { commonConstants } from "../constants/commonConstants";

const getLanguage=async(req:Request,res:Response)=>{
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

const addLanguage=async(req:Request,res:Response)=>{
    try{
        const {languageName,dockerCommand}= req.body;
        const addLanguageServicesResult=await addLanguagesServices(languageName,dockerCommand);
        if(addLanguageServicesResult.status===commonConstants.ALREADY_EXISTS){
            res.send(addLanguageServicesResult.result);
            return;
        }
        res.send(addLanguageServicesResult.result);
    }catch(error:any){
        res.send(error.message);
    }
}

const updateLanguage=async(req:Request,res:Response)=>{
    try {
        const {languageName,dockerCommand}=req.body;
        const updateLanguageServiceResult=await updateLanguageService(languageName,dockerCommand);
        if(updateLanguageServiceResult.status===commonConstants.LANGUAGE_NOT_FOUND){
            res.send(updateLanguageServiceResult.result);
            return;
        }
        res.send(updateLanguageServiceResult.result);
    } catch (error:any) {
        res.send(error.message);
    }
}

export {getLanguage,addLanguage,updateLanguage};