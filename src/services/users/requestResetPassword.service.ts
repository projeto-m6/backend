import { log } from "console";
import jwt from "jsonwebtoken";
import ErrorHttp from "../../errors/errorHttp";
import { prisma } from "../../prisma";

const nodemailer = require("nodemailer");

export const requestResetPasswordService = async (email: string) => {
  const account = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  console.log(account);

  if (!account) {
    throw new ErrorHttp("Email not found", 404);
  }

  const token = jwt.sign(
    { id: account.id, is_buyer: account.is_buyer },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1h",
    }
  );

  const link = `https://localhost:3000/users/reset-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    service: "gmail",
    secure: false,
    auth: {
      user: "motorsshop4@gmail.com",
      pass: "wrkdeaoubmqfrblk",
    },
  });
  const mailOptions = {
    from: "motorsshop4@gmail.com",
    to: email,
    subject: "Redefinir senha",
    text: `Acesse esse site para redefinir sua senha: ${link}`,
    html: `Clique <a href="${link}">aqui</a> para atualizar sua senha.`,
  };

  await transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("E-mail enviado: " + info.response);
    }
  });

  return link;
};
