import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "76918d31cfe9e0",
      pass: "65f1ef2bd600d0"
    }
  });

export class NodeMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Bruno Vigel <brunovigelr@gmail.com>',
            subject,
            html: body,
        })
    }
}