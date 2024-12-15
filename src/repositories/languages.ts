import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

const getLanguages = async()=>{
    return await prisma.languages.findMany();
}

const getLanguage=async(languageName:string)=>{
    return await prisma.languages.findFirst({
        where:{
            languageName: languageName
        }
    });
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

export {getLanguages,getLanguage,addLanguage,updateLanguage}