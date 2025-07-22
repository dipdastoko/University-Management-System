import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandlers";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
const app = express();

//parser
app.use(express.json()); //parses incoming requests with JSON payloads and makes the parsed data available in req.body.
app.use(cors()); //Enables CORS (Cross-Origin Resource Sharing) — it allows server to accept requests from different domains.

// application routes
app.use("/api/v1/", router);

const test = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", test);

app.use(globalErrorHandler);

//Not found route
app.use(notFound);

export default app;
