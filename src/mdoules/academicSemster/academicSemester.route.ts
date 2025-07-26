import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import academicSemesterValidationSchema from "./academicSemster.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(academicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
