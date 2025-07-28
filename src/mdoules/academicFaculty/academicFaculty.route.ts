import express from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { AcademicFacultyValidations } from "./academicFaculty.validation";
const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get("/", AcademicFacultyControllers.getAllAcademicFaculty);

router.get(
  "/:academicFacultyId",
  AcademicFacultyControllers.getSingleAcademicFaculty,
);

router.patch(
  "/:academicFacultyId",
  validateRequest(
    AcademicFacultyValidations.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
