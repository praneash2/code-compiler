import { commonConstants } from "../constants/commonConstants";
import { getLanguage } from "../repositories/languages";

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

export {getLanguagesServices}