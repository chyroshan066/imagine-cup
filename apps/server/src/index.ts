import { PORT } from "./schemas/env.schema.ts";
import { app } from "./server/app.ts";
import { Request, Response } from "express";
import morgan from "morgan";

app.use((req: Request, res: Response) => {
    res.send("Page not found");
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
})