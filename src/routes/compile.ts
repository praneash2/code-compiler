import { Router } from "express";
import { compileCode } from "../controllers/compile";

const compileRouter=Router();

compileRouter.get('/',compileCode)

export {compileRouter};