import { Request, Response } from "express";

const compileCode=(req:Request,res:Response)=>{
    // const {language}= req.body;
    console.log(req);
    res.send("code");
}

export {compileCode};