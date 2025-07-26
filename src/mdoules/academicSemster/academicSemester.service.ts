import TAcademicSemster from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";
import { AcademicSemesterConsts } from "./academicSemster.consts";

const getAllAcademicSemstersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateSemesterIntoDB = async (id: string, payLoad: TAcademicSemster) => {
  const result = await AcademicSemester.updateOne({ _id: id }, payLoad);
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
  getSingleSemesterFromDB,
  updateSemesterIntoDB,
  createAcademicSemesterIntoDB,
};
