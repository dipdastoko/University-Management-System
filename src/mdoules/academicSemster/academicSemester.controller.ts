import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic semester is created successfully",
      data: result,
    });
  },
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
