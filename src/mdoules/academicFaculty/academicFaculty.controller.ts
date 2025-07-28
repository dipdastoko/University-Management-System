import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicFacultyServices } from "./academicFaculty.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.createAcademicFacultyInotDB(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Faculty Created Successfylly",
      data: result,
    });
  },
);

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Academic Facutly Retrieved Successfully",
      data: result,
    });
  },
);

const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(
      req.params.academicFacultyId,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Faculty Retrieved Successfully",
      data: result,
    });
  },
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
      req.params.academicFacultyId,
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic Faculty Updated Successfully",
      data: result,
    });
  },
);

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
