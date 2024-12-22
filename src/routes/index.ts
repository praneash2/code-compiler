import { Router } from "express";
import { compileRouter } from "./compile";
import { languageRouter } from "./languages";

const mainRouter=Router();

mainRouter.use("/compile",compileRouter);
mainRouter.use("/language",languageRouter);

export {mainRouter};