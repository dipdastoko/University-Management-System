import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(25, "First name cannot be more than 25 characters")
    .nonempty("First name is required")
    .trim()
    .refine(
      (val) => val === val.charAt(0).toUpperCase() + val.slice(1),
      (val) => ({ message: `${val} is not in capitalized format` }),
    ),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .trim()
    .refine(
      (val) => /^[A-Za-z]+$/.test(val),
      (val) => ({ message: `${val} is not valid` }),
    ),
});

// Sub-schema: Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required").trim(),
  fatherOccupation: z
    .string()
    .nonempty("Father's occupation is required")
    .trim(),
  fatherContactNo: z
    .string()
    .nonempty("Father's contact number is required")
    .trim(),
  motherName: z.string().nonempty("Mother's name is required").trim(),
  motherOccupation: z
    .string()
    .nonempty("Mother's occupation is required")
    .trim(),
  motherContactNo: z
    .string()
    .nonempty("Mother's contact number is required")
    .trim(),
});

// Sub-schema: Local Guardian
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty("Local guardian's name is required").trim(),
  occupation: z
    .string()
    .nonempty("Local guardian's occupation is required")
    .trim(),
  contactNo: z
    .string()
    .nonempty("Local guardian's contact number is required")
    .trim(),
  address: z.string().nonempty("Local guardian's address is required").trim(),
});

// Main Schema: Student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female", "other"]),
      dateOfBirth: z.date().optional(),
      email: z
        .string()
        .nonempty("Email address is required")
        .email("Invalid email address")
        .trim(),
      contactNo: z.string().nonempty("Contact number is required").trim(),
      emergencyContactNo: z
        .string()
        .nonempty("Emergency contact number is required")
        .trim(),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      presentAddress: z.string().nonempty("Present address is required").trim(),
      permanentAddress: z
        .string()
        .nonempty("Permanent address is required")
        .trim(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().trim().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
