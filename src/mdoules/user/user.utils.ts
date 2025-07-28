import TAcademicSemster from "../academicSemster/academicSemester.interface";

export const generateStudentId = (payLoad: TAcademicSemster) => {
  //first-time
  const currentId = 0;
  let incrementId = (currentId + 1).toString().padStart(4, "0");

  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
