import express from "express";
import { StudentRoutes } from "../../mdoules/student/student.route";
import { UserRoutes } from "../../mdoules/user/user.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
