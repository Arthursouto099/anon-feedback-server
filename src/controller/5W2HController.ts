import { Request,Response } from "express";
import prisma from "../client";




export default class F5W2HController {
    public static async createFeedback(req: Request, res: Response) {
        // whatToDo                String
        // whyToDo                 String
        // whoWillDo               String
        // whereProcessImpacted    String
        // howToDo                 String
        // neededResources         String[] // array de textos
      
        // deadline                DateTime?
        // status                  FeedbackStatus @default(pending)
      
        // implementation          String @default("sim")
        // effectiveness           String?
      
        // createdAt               DateTime @default(now())
        // updatedAt               DateTime @updatedAt
        // idUser                  String
        // user                    User     @relation(fields: [idUser], references: [id], onDelete: Cascade)
      
        const {whatToDo,whyToDo, whoWillDo, whereProcessImpacted, howToDo, neededResources, deadline, status, idUser } = req.body

        try{
           const f5w2h = await prisma.feedback5W2H.create({data: {whatToDo, whyToDo, whoWillDo, whereProcessImpacted, howToDo, neededResources, deadline, status, idUser}})
           if(!f5w2h) {
            res.status(400).json({message: "Erro ao criar o feedback"})
            return;
           }

           res.status(201).json({message: "FeedBack criado com sucesso"})


        }
        catch(e: any) {
            console.log(e)
            res.status(500).json({ message: "Internal Errro" })
            return
        }
    }
}