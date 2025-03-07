import { Response } from 'express';
import { ServerOperationEnum } from '../enums/ServerOperation.enum';

interface WebApiResultViewModel {
    status: ServerOperationEnum;
    message?: string | null;
    result?: any;
}

export class ResponseHandler {
    static send(res: Response, status: ServerOperationEnum, message: string | null = null, result: any = null) {
        const responseModel: WebApiResultViewModel = {
            status,
            message,
            result,
        };

        res.status(200).json(responseModel);
    }
}
