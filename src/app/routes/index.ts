import express from "express";
import { StudentRoutes } from "../../mdoules/student/student.route";
import { UserRoutes } from "../../mdoules/user/user.route";
import { AcademicSemesterRoutes } from "../../mdoules/academicSemster/academicSemester.route";
import { AcademicFacultyRoutes } from "../../mdoules/academicFaculty/academicFaculty.route";
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
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
