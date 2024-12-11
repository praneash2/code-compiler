// import { exec } from 'child_process';
// import { promisify } from 'util';

// const execAsync = promisify(exec);

// // Function to run a command
// async function runCommand(command:string) {
//     try {
//         const { stdout, stderr } = await execAsync(command);
        
//         if (stderr) {
//             console.error(`Stderr: ${stderr}`);
//             return stderr;
//         }
        
//         return stdout; // Return the command output
//     } catch (error:any) {
//         console.error(`Error: ${error.message}`);
//         throw error; // Rethrow the error for further handling
//     }
// }


// /**
//  * Run a terminal command
//  */
// const runTerminalCommand =async(command:string):Promise<string>=>{
//     try {
//         return  await runCommand(command);
//     } catch (error) {
//         throw error;
//     }
   
// }

// export {runTerminalCommand};


import { spawn } from 'child_process';

// Function to run a command with optional stdin input
async function runCommand(
    command: string,
    args: string[] = [],
    input?: string
): Promise<string> {
    return new Promise((resolve, reject) => {
        
        const process = spawn(command,args);

        let output = '';
        let errorOutput = '';

        // Capture standard output
        process.stdout.on('data', (data) => {
            output += data.toString();
        });

        // Capture standard error
        process.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });

        // Handle process errors (e.g., command not found)
        process.on('error', (err) => {
            reject(new Error(`Process failed to start: ${err.message}`));
        });

        // Handle process completion
        process.on('close', (code) => {
            if (code === 0) {
                resolve(output.trim()); 
            } else {
                reject(new Error(`Process exited with code ${code}: ${errorOutput.trim()}`));
            }
        });

        // Write to stdin if input is provided
        if (input) {
            process.stdin.write(input);
            process.stdin.end(); 
        }
    });
}

/**
 * Run a terminal command with optional `stdin` input
 */
const runTerminalCommand = async (
    command: string,
    codeToBeExecuted:string,
    input?: string,
): Promise<string> => {
    try {
        console.log(command);
        const args=command.split(" ");
        args.push(codeToBeExecuted);
        console.log(args);
        return await runCommand(args[0],args.slice(1) , input);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        throw error;
    }
};

export { runTerminalCommand };
