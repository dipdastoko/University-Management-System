import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";
import sendResponse from "../../app/utils/sendResponse";
import HttpStatus from "http-status";

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Academic Depratment Created Successfully",
      data: result,
    });
  },
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
        req.params.academicDepartmentId,
        req.body,
      );

    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Academic Department Updated Successfully",
      data: result,
    });
  },
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "All Department Retrieved Successfully",
      data: result,
    });
  },
);

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentServices.getSingleDepartmentFromDB(
    req.params.academicDepartmentId,
  );
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Department Retrieved Successfully",
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  updateAcademicDepartment,
  getAllAcademicDepartments,
  getSingleDepartment,
};
