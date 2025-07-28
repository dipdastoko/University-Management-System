import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Academic Faculty must be String",
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Academic Faculty must be String",
  }),
});

export const AcademicFacultyValidations = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
