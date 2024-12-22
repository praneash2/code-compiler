import { Router } from "express";
import { getLanguages } from "../controllers/languages";

const languageRouter=Router();

languageRouter.get('/',getLanguages)

export {languageRouter};