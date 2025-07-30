import express from "express";
import validateRequest from "../../app/middlewares/validateRequest";
import { AcademicDepartmentValidationSchemas } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidationSchemas.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.patch(
  "/update-academic-department/:academicDepartmentId",
  validateRequest(
    AcademicDepartmentValidationSchemas.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

router.get("/", AcademicDepartmentControllers.getAllAcademicDepartments);

router.get(
  "/:academicDepartmentId",
  AcademicDepartmentControllers.getSingleDepartment,
);

export const AcademicDepartmentRouters = router;
