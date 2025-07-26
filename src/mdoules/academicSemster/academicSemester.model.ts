import { model, Schema } from "mongoose";
import TAcademicSemster from "./academicSemester.interface";
import { AcademicSemesterConsts } from "./academicSemster.consts";

const academicSemsterSchema = new Schema<TAcademicSemster>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterConsts.AcademicSemesterNames,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterConsts.AcademicSemesterCodes,
    },
    startMonth: {
      type: String,
      enum: AcademicSemesterConsts.Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: AcademicSemesterConsts.Months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

academicSemsterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error("Semester already exists!");
  } else {
    next();
  }
});

export const AcademicSemester = model<TAcademicSemster>(
  "AcademicSemester",
  academicSemsterSchema,
);
