import { Request, Response } from "express";
import * as response from '../../res/responses';
import { Message } from '../../models/message/message.model';
import {templateMail} from "../../mailer/send-mail";
import {confirmation} from "../../emails/confirmation";
export const getMessage = async(req: Request, res: Response) => {
    try {
        const message = await Message.findAll()
        response.code200(req, res, message);
    } catch (error){
        return response.code500(req, res, error)
    }
}

export const createMessage = async(req: Request, res: Response) => {
    try {
        const { body } = req;
        await Message.create(body);
        response.code201(req, res);
    } catch (error){
        return response.code500(req, res, error)
    }
}

