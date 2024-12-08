import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

const getLanguages = async()=>{
    return await prisma.languages.findMany();
}

const addLanguage = async(languageName:string,dockerCommand:string)=>{
    await prisma.languages.create({
        data: {
            languageName: languageName,
            dockerCommand: dockerCommand
        }
      });
}   

export {getLanguages,addLanguage}