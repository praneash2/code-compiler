import express from "express";
import cors from "cors";
import { mainRouter } from "./routes";

const app=express();

app.use(cors());
app.use(mainRouter);

let PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server started listening on ${PORT}`);
});


import { runTerminalCommand } from "./utils/terminalExecution";


const codeToBeCompiled:string =`
print("Hello, World!")
for i in range(5):
    print(i)
`;

const processCode=(code:string)=>{

    return code.replace(/"/g,"'");
}

console.log(processCode(codeToBeCompiled));

(async()=>{
    try {
        let output=await runTerminalCommand(`docker run --rm -i python:3.9 python -c "${processCode(codeToBeCompiled)}"`)
        console.log(output);
        
    }catch (error) {
            console.error(error);
    }   
    

})()
