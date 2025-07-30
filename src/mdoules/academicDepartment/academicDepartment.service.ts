import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepratment.model";

const createAcademicDepartmentIntoDB = async (payLoad: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payLoad);
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payLoad: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payLoad,
  );
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate("academicFaculty");
  return result;
};

const getSingleDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id);
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleDepartmentFromDB,
};
