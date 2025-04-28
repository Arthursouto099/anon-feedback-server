import { Router } from "express";
import F5W2HController from "../controller/5W2HController";
import isValidSchema from "../middlewares/checkSchema";
import { validate5W2H } from "../schemas/validatorFeedback";


const f5w2h = Router()

f5w2h.post("/create", isValidSchema(validate5W2H), F5W2HController.createFeedback)

export default f5w2h