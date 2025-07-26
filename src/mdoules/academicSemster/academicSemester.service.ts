import TAcademicSemster from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";
import { AcademicSemesterConsts } from "./academicSemster.consts";

const getAllAcademicSemstersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemster) => {
  // semester name --> semester code

  if (
    AcademicSemesterConsts.academicSemesterNameCodeMapper[payLoad.name] !==
    payLoad.code
  ) {
    throw new Error("Invalid Semester Code!");
  }
  const result = await AcademicSemester.create(payLoad);
  return result;
};

export const AcademicSemesterServices = {
  getAllAcademicSemstersFromDB,
  createAcademicSemesterIntoDB,
};
