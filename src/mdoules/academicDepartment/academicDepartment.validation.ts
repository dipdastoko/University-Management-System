import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department must be a string",
      required_error: "Name is required",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic faculty must be string",
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academic Department must be a string",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic faculty must be a string",
        required_error: "Academic faculty is required",
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidationSchemas = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
