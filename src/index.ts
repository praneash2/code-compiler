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
import { addLanguage, getLanguage, getLanguages, updateLanguage } from "./repositories/languages";


const codeToBeCompiled:string =`
a=input()
print(a,"s")
`;

const processCode=(code:string)=>{

    return code.replace(/"/g,"'");
}

// console.log(processCode(codeToBeCompiled));

(async()=>{

    // const commandForLanguage=await getLanguage("cpp");
    // const dockerCommand=commandForLanguage?.dockerCommand;

    // if(!dockerCommand){
    //     return "not supported";
    // }

    // const command = dockerCommand.split("$$$");
    // const bashCommand=command[1].replace(/\|\|\|/,processCode(codeToBeCompiled));
    // console.log(command[0],"d",bashCommand);



    // await addLanguage("python",`docker run --rm -i python:3.9 python -c "${processCode(codeToBeCompiled)}"`)
    // const res=await getLanguages();
    // console.log(res);
//     const res=await updateLanguage("python",`docker run --rm -i python:3.9 bash -c$$$cat <<EOF > Main.py
// |||
// EOF
// python Main.py
// `);
//     console.log(res);
    // try {
    //     runTerminalCommand(`docker run --rm -i python:3.9 python -c "${processCode(codeToBeCompiled)}"`)
        
    // }catch (error) {
    //         console.error(error);
    // }   
    
//    const op= await runTerminalCommand(`docker run --rm -i gcc:latest bash -c`,`
// cat <<EOF > program.cpp
// #include <iostream>
// int main() {
//     std::cout << "Another Program";
//     return 0;
// }
// EOF
// g++ -o program program.cpp &&
// ./program
// `);
//    console.log(op)

})()

