import TAcademicSemster from "../academicSemster/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: "student",
    },
    { id: 1 },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payLoad: TAcademicSemster) => {
  let currentId = 0;

  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payLoad.code;
  const currentYear = payLoad.year;
  if (
    lastStudentSemesterCode &&
    lastStudentYear === currentSemesterCode &&
    currentYear
  ) {
    currentId = lastStudentId?.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
