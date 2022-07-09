import { mailOptions } from './mail-options';
import { transporter } from './transporter';

export const templateMail = async (template: any, toEmail: string) => {
    try {
        mailOptions.to = toEmail;
        mailOptions.html = template;

        transporter.sendMail(mailOptions, function (error, success) {
            if (error) {
                console.log("Mail Error", error);
                return error;
            } else {
                console.log("Mail Send", success);
                return success;
            }
        });
    } catch (error) {
        console.log("Fatal error",error)
        return error
    }
}