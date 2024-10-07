import nodemailer from "nodemailer";
import EnvConfig from "../utils/config";

const leadRecevingEmailsArray = EnvConfig.leadRecevingEmails.replace(/[\[\]]/g, "").split(",");

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EnvConfig.email,
    pass: EnvConfig.password,
  },
});

export const mailOptions = {
  from: EnvConfig.email,
  to: leadRecevingEmailsArray,
};
