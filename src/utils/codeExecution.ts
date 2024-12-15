import { runTerminalCommand } from "./terminalExecution";

const processCode=(code:string)=>{

    return code.replace(/"/g,"'");
}


const execute=async (language:string,code:string,input:string)=>{
    console.log();
    if(input.length===0){
        return await runTerminalCommand(`docker run --rm -i python:3.9 python -c`,processCode(code))
    }
    return await runTerminalCommand(`docker run --rm -i python:3.9 python -c`,processCode(code),input)
}

export {execute};