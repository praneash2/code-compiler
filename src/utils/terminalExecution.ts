import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Function to run a command
async function runCommand(command:string) {
    try {
        const { stdout, stderr } = await execAsync(command);
        
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
        }
        
        return stdout; // Return the command output
    } catch (error:any) {
        console.error(`Error: ${error.message}`);
        throw error; // Rethrow the error for further handling
    }
}


/**
 * Run a terminal command
 */
const runTerminalCommand =async(command:string):Promise<string>=>{
    try {
        return  await runCommand(command);
    } catch (error) {
        throw error;
    }
   
}

export {runTerminalCommand};