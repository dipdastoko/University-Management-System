import { Schema, model } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
  StudentModelType,
} from "./student.interface";
import validator from "validator";
import bcrypt from "bcrypt";
import config from "../../app/config";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    maxlength: [25, "First name cannot be more than 25 character"],
    trim: true,
    validate: {
      validator: function (value) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return value === firstNameStr;
      },
      message: "{VALUE} is not in capitalized format",
    },
  },
  middleName: { type: String, trim: true }, // optional
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    validate: (value: string) => {
      validator.isAlpha(value);
    },
    message: "{VALUE} is not valid",
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, "Father's contact number is required"],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, "Mother's name is required"],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, "Local guardian's name is required"],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Local guardian's address is required"],
  },
});

const studentSchema = new Schema<TStudent, StudentModelType>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Student password is required"],
    maxlength: [20, "Password can not be more than 20 characters"],
  },
  name: {
    type: userNameSchema,
    required: [true, "Student name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message:
        "{VALUE} is not a valid gender. Gender must be either male, female, or other.",
    },
    required: [true, "Gender is required"],
    trim: true,
  },
  dateOfBirth: { type: String, trim: true }, // optional
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    trim: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "{VALUE} is not a valid email address",
    },
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message:
        "Blood group {VALUE} is invalid. Allowed values: A+, A-, B+, B-, AB+, AB-, O+, O-",
    },
    trim: true,
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: { type: String, trim: true }, // optional
  isActive: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    trim: true,
  },
});

//pre save middleware/hook
studentSchema.pre("save", async function (next) {
  // console.log(this, "pre hook: we will save the data");
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  //hashing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//post save middleware/hook
studentSchema.post("save", function () {
  console.log(this, "post hook: we saved our data");
});

// creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await StudentModel.findOne({ id });
//   return existingUser;
// };

studentSchema.static("isUserExist", async function isUserExist(id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
});

export const Student = model<TStudent, StudentModelType>(
  "Student",
  studentSchema,
);
