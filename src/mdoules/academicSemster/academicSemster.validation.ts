import z from "zod";
import { AcademicSemesterConsts } from "./academicSemster.consts";
const academicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterConsts.AcademicSemesterNames] as [
      string,
      ...string[],
    ]),
    year: z.string(),
    code: z.enum([...AcademicSemesterConsts.AcademicSemesterCodes] as [
      string,
      ...string[],
    ]),
    startMonth: z.enum([...AcademicSemesterConsts.Months] as [
      string,
      ...string[],
    ]),
    endMonth: z.enum([...AcademicSemesterConsts.Months] as [
      string,
      ...string[],
    ]),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...AcademicSemesterConsts.AcademicSemesterNames] as [
        string,
        ...string[],
      ])
      .optional(),
    year: z.string().optional(),
    code: z
      .enum([...AcademicSemesterConsts.AcademicSemesterCodes] as [
        string,
        ...string[],
      ])
      .optional(),
    startMonth: z
      .enum([...AcademicSemesterConsts.Months] as [string, ...string[]])
      .optional(),
    endMonth: z
      .enum([...AcademicSemesterConsts.Months] as [string, ...string[]])
      .optional(),
  }),
});

export const AcademicSemesterValidationSchemas = {
  academicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
