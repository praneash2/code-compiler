import { execute } from "../utils/codeExecution";


const compileCodeService=async (language:string,code:string)=>{
    
    try {
       
        return await execute(language,code); 
    } catch (error:any) {
        throw Error(error);
    }
    
}

export {compileCodeService};