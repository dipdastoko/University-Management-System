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

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

export const generateStudentId = async (payLoad: TAcademicSemster) => {
  const currentId = (await findLastStudentId()) || 0;
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
