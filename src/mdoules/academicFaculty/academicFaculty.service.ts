import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./acadmicFaculty.model";

const createAcademicFacultyInotDB = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payLoad);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payLoad: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate(
    {
      _id: id,
    },
    payLoad,
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyInotDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
