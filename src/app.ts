import express, { Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./mdoules/student/student.route";
import { UserRoutes } from "./mdoules/user/user.route";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandlers";
import notFound from "./app/middlewares/notFound";
const app = express();

//parser
app.use(express.json()); //parses incoming requests with JSON payloads and makes the parsed data available in req.body.
app.use(cors()); //Enables CORS (Cross-Origin Resource Sharing) — it allows server to accept requests from different domains.

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAController);

app.use(globalErrorHandler);

//Not found route
app.use(notFound);

export default app;
