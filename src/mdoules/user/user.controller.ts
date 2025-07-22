import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // creating a schema validation using zod

    const { password, student: studentData } = req.body;

    // data validation using zod
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
