import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicSemesterServices.getAllAcademicSemstersFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Semesters Retrieved Successfully.",
      data: result,
    });
  },
);

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicSemesterServices.getSingleSemesterFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semster Retrieved Successfully",
    data: result,
  });
});

const updateSemster = catchAsync(async (req: Request, res: Response) => {
  const semesterId = req.params.semesterId;
  const result = await AcademicSemesterServices.updateSemesterIntoDB(
    semesterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semster Updated Successfully",
    data: result,
  });
});

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
  getAllAcademicSemester,
  getSingleSemester,
  updateSemster,
  createAcademicSemester,
};
