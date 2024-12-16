import { getLanguage } from "../repositories/languages";
import { runTerminalCommand } from "./terminalExecution";

const processCode = (code: string) => {
  return code.replace(/'/g, `"`);
};

const execute = async (language: string, code: string, input: string) => {
  
    const commandForLanguage=await getLanguage(language);
    const dockerCommand=commandForLanguage?.dockerCommand;

    if(!dockerCommand){
        return "not supported";
    }

    const command = dockerCommand.split("$$$");
    const bashCommand=command[1].replace(/\|\|\|/,processCode(code));
    console.log(command[0],"00",bashCommand);
    const mainCommand=command[0];
    if (input.length === 0) {
    return await runTerminalCommand(mainCommand,bashCommand);
  }
  return await  runTerminalCommand(mainCommand,bashCommand,input);

};

export { execute };
