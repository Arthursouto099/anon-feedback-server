import { response, Router } from "express";
import AuthController from "../controller/AuthController";
import { loginSchema, signupSchema } from "../schemas/validatorUser";
import isValidSchema from "../middlewares/checkSchema";
import { Request, Response } from "express";
import { request } from "http";


const auth_router = Router()

auth_router.post("/signup", isValidSchema(signupSchema), AuthController.signup)
auth_router.post("/login", isValidSchema(loginSchema),AuthController.login)


export default auth_router;