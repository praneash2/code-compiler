import express from "express";
import cors from "cors";
import { mainRouter } from "./routes";

const app=express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

let PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server started listening on ${PORT}`);
});


import { runTerminalCommand } from "./utils/terminalExecution";
import { addLanguage, getLanguages, updateLanguage } from "./repositories/languages";


const codeToBeCompiled:string =`
print("Hello, World!")
`;

const processCode=(code:string)=>{

    return code.replace(/"/g,"'");
}

// console.log(processCode(codeToBeCompiled));

(async()=>{
    // await addLanguage("python",`docker run --rm -i python:3.9 python -c "${processCode(codeToBeCompiled)}"`)
    // const res=await getLanguages();
    // console.log(res);
    // const res=await updateLanguage("python",`docker run --rm -i python:3.9 python -c "$$$"`);
    // console.log(res);
    // try {
    //     runTerminalCommand(`docker run --rm -i python:3.9 python -c "${processCode(codeToBeCompiled)}"`)
        
    // }catch (error) {
    //         console.error(error);
    // }   
    
    // runTerminalCommand(`docker run --rm -i python:3.9 python -c "${processCode(codeToBeCompiled)}"`);

})()

const { spawn } = require('child_process');
try {
    const ls = spawn('docker', ['run', '--rm', '-i', 'python:3.9', 'python', '-c', 'print("helllo")']);

    ls.stdout.on('data', (data:string) => {
    console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data:string) => {
    console.error(`stderr: ${data}`);
    });

    ls.on('close', (code:string) => {
    console.log(`child process exited with code ${code}`);
    });
} catch (error) {
    console.log("broo",error);
}
