import { runTerminalCommand } from "./utils/terminalExecution";


(async()=>{
    let output=await runTerminalCommand("ls")
    console.log(output);
    
})()
