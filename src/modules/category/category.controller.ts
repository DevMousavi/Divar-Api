import { Request, Response, NextFunction } from 'express';
import CategoryCreateDto from '../../dtos/category/category.dto';
import categoryService from './category.service';
import { ServerOperationEnum } from '../../enums/ServerOperation.enum';
import { CategoryResponse } from '../../types/category/category.response';
import { ResponseHandler } from '../../utils/responseHandler.utils';

interface ResultType {
    message: string;
    statusCode: ServerOperationEnum;
    data: CategoryResponse | null;
}
class CategoryController {
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryData: CategoryCreateDto = new CategoryCreateDto(req.body);
            const result: ResultType = await categoryService.create(categoryData);
            return ResponseHandler.send(res, result.statusCode, result.message, result.data);
        } catch (error) {
            next(error);
        }
    };
}

export default new CategoryController();
