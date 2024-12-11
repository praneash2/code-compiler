import { execute } from "../utils/codeExecution";


const compileCodeService=async (language:string,code:string,input:string)=>{
    
    try {
       
        return await execute(language,code,input); 
    } catch (error:any) {
        throw Error(error);
    }
    
}

export {compileCodeService};