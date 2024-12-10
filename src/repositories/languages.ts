import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

const getLanguages = async()=>{
    return await prisma.languages.findMany();
}

const addLanguage = async(languageName:string,dockerCommand:string)=>{
    return await prisma.languages.create({
        data: {
            languageName: languageName,
            dockerCommand: dockerCommand
        }
      });
}   

const updateLanguage= async(languageName:string,dockerCommand:string)=>{
   return await prisma.languages.update({
        where: {
            languageName: languageName,
          },
          data: {
            dockerCommand: dockerCommand,
          },
    });
}

export {getLanguages,addLanguage,updateLanguage}