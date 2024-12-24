import { commonConstants } from "../constants/commonConstants";
import { addLanguage, getLanguage, updateLanguage } from "../repositories/languages";

const getLanguagesServices=async(languageName:string)=>{
    try{
       const getLanguageResult=await getLanguage(languageName);
        
       if(getLanguageResult===null){
        return {status:commonConstants.LANGUAGE_NOT_FOUND,result:commonConstants.LANGUAGE_NOT_FOUND}
       }
       
       return {status:commonConstants.SUCCESS,result:getLanguageResult};
    }catch(error:any){
        throw new Error(error);
    }
}

const addLanguagesServices=async(languageName:string,dockerCommand:string)=>{
    try{
        const getLanguageResult=await getLanguage(languageName);
        if(getLanguageResult){
            return {status:commonConstants.ALREADY_EXISTS,result:commonConstants.ALREADY_EXISTS}
        }
        const addLanguageResult=await addLanguage(languageName,dockerCommand);
        return {status:commonConstants.CREATED,result:addLanguageResult};
    }
    catch(error:any){
        throw new Error(error)
    }
}

const updateLanguageService=async(languageName:string,dockerCommand:string)=>{
    try{
        const getLanguageResult=await getLanguage(languageName);
        if(!getLanguageResult){
            return {status:commonConstants.LANGUAGE_NOT_FOUND,result:commonConstants.LANGUAGE_NOT_FOUND};
        }

        const updateLanguageResult=await updateLanguage(languageName,dockerCommand);
        return {status:commonConstants.UPDATED,result:updateLanguageResult};
    }catch(error:any){
        throw new Error(error)
    }
}

export {getLanguagesServices,addLanguagesServices,updateLanguageService}