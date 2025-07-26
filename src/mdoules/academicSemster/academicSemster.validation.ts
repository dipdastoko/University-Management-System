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

export default academicSemesterValidationSchema;
