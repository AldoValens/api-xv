"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateMail = void 0;
const mail_options_1 = require("./mail-options");
const transporter_1 = require("./transporter");
const templateMail = (template, toEmail) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mail_options_1.mailOptions.to = toEmail;
        mail_options_1.mailOptions.html = template;
        transporter_1.transporter.sendMail(mail_options_1.mailOptions, function (error, success) {
            if (error) {
                console.log("Mail Error", error);
                return error;
            }
            else {
                console.log("Mail Send", success);
                return success;
            }
        });
    }
    catch (error) {
        console.log("Fatal error", error);
        return error;
    }
});
exports.templateMail = templateMail;
//# sourceMappingURL=send-mail.js.map