import { Router } from "express";
import { addLanguage, getLanguage } from "../controllers/languages";

const languageRouter=Router();

languageRouter.get('/',getLanguage)
languageRouter.post("/",addLanguage);

export {languageRouter};