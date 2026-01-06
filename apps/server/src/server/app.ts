import express from "express";
import cors from "cors";
import helmet from "helmet";
import { loggerMiddleware } from "../middlewares/logger.middleware.ts";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(loggerMiddleware);