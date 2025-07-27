import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { AcademicSemesterValidationSchemas } from "./academicSemster.validation";

const router = express.Router();

router.get("/", AcademicSemesterControllers.getAllAcademicSemester);
router.get("/:id", AcademicSemesterControllers.getSingleSemester);
router.patch(
  "/:semesterId",
  validateRequest(
    AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateSemster,
);

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidationSchemas.academicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
