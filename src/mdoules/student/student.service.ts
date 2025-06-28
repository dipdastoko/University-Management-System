import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); //built-in static method

  const student = new StudentModel(studentData);
  if (await student.isUserExists(student.id)) {
    throw new Error("User already exists");
  }
  const result = await student.save(); //built-in instance method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
