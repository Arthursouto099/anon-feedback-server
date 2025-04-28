import z from "zod"




export const validate5W2H = z.object({
    whatToDo: z.string().min(4, "Deve possuir no mínimo 4 caracteres"),
    whyToDo: z.string().min(4, "Deve possuir no mínimo 4 caracteres"),
    whoWillDo: z.string().min(4, "O nome precisa ter no mínimo 2 caracteres"),
    whereProcessImpacted : z.string().min(4, "O local possuir no mínimo 4 caracteres"),
    howToDo: z.string().min(4, "O 'COMO' deve possuir no mínimo 4 caracteres"),
    neededResources: z.array(z.string()),
    deadline: z.preprocess(
        (arg) => arg ? new Date(arg as string) : undefined,
        z.date().optional()
    ),
    status: z.enum(["pendente", "em_progresso", "completo"]).optional(),
    implementation: z.string().optional(),
    effectiveness: z.string().optional(),

})