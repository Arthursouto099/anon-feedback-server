import { Router } from "express";
import auth_router from "./auth_router";
import f5w2h from "./f5w2h_route";

const main = Router();


main.use("/auth", auth_router)
main.use("/feedbacks", f5w2h)





export default main;