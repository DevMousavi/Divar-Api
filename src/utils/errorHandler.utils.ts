import { ValidationErrorItem } from '@sequelize/core';
import type { Express, Request, Response, NextFunction, ErrorRequestHandler } from 'express';

interface AppError extends Error {
    status?: number;
    statusCode?: number;
    code?: number;
    errors?: ValidationErrorItem[];
}

class ErrorHandler {
    public notFoundRoute(app: Express) {
        app.use((req: Request, res: Response) => {
            res.status(404).json({
                status: 404,
                message: 'Not Found Route',
            });
        });
    }

    // public validationError(app: Express) {
    //     const validationErrorHandler: ErrorRequestHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
    //         if (err.name === 'ValidationError' || err.name === 'SequelizeValidationError') {
    //             const errors =
    //                 err.errors?.map((error) => ({
    //                     field: (error as ValidationErrorItem).path || 'unknown_field',
    //                     message: error.message,
    //                 })) || [];

    //             res.status(400).json({
    //                 status: 400,
    //                 message: 'Validation Error',
    //                 errors: errors,
    //             });
    //             return;
    //         }

    //         next(err);
    //     };

    //     app.use(validationErrorHandler);
    // }

    public allError(app: Express) {
        const allErrorHandler: ErrorRequestHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
            let status = 500;

            if (err.name === 'SequelizeUniqueConstraintError') {
                const errors =
                    err.errors?.map((error) => ({
                        field: (error as ValidationErrorItem).path || 'unknown_field',
                        message: error.message,
                    })) || [];

                res.status(400).json({
                    status: 400,
                    message: 'Duplicate Entry Error',
                    errors: errors,
                });
                return;
            }

            if (err.name === 'CastError') {
                status = 400;
                res.status(status).json({
                    status: status,
                    message: err.message,
                });
                return;
            }

            if (err.status || err.statusCode || err.code) {
                status = err.status || err.statusCode || err.code || 500;
            }

            if (isNaN(status) || status > 511 || status < 200) {
                status = 500;
            }

            res.status(status).json({
                status: status,
                message: err.message || 'Internal Server Error',
            });
        };

        app.use(allErrorHandler);
    }
}

export default new ErrorHandler();
