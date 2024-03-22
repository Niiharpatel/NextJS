import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendMail = async ({ email, emailType, userId }) => {
  try {
    const hashToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "cda2dc0b3e2038",
        pass: "37066e64b1e30b",
      },
    });

    const mailOptions = {
      from: "nihar@123.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href='${
        process.env.DOMAIN
      }/verifyemail?token=${hashToken}'>Here</a> to ${
        emailType === "VERIFY" ? "Verify your email" : "Reset your password"
      } or copy and paste the link below in your browser<br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashToken}</p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
