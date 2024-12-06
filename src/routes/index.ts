import { Router } from "express";
import { compileRouter } from "./compile";

const mainRouter=Router();

mainRouter.use(compileRouter);

export {mainRouter};