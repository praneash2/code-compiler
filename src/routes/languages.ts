import { Router } from "express";
import { addLanguage, getLanguage, updateLanguage } from "../controllers/languages";

const languageRouter=Router();

languageRouter.get('/',getLanguage)
languageRouter.post("/",addLanguage);
languageRouter.put("/",updateLanguage);

export {languageRouter};