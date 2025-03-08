import { Request, Response, NextFunction } from 'express';
import CategoryCreateDto from '../../dtos/category/category.dto';
import categoryService from './category.service';
import { ServerOperationEnum } from '../../enums/ServerOperation.enum';
import { CategoryResponse } from '../../types/category/category.response';
import { ResponseHandler } from '../../utils/responseHandler.utils';
import { CategoryModelType } from '../../types/category/category.model.type';

interface CreateResultType {
    message: string;
    statusCode: ServerOperationEnum;
    data: CategoryResponse | null;
}
interface ListResultType {
    message: string;
    statusCode: ServerOperationEnum;
    data: CategoryModelType[];
}
class CategoryController {
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryData: CategoryCreateDto = new CategoryCreateDto(req.body);
            const result: CreateResultType = await categoryService.create(categoryData);
            return ResponseHandler.send(res, result.statusCode, result.message, result.data);
        } catch (error) {
            next(error);
        }
    };
    public list = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const pageIndex = parseInt(req.query.pageIndex as string) || 1;
            const itemsPerPage = parseInt(req.query.itemsPerPage as string) || 10;

            const categories = await categoryService.list(pageIndex, itemsPerPage);
            return ResponseHandler.send(res, categories.statusCode, categories.message, categories.data);
        } catch (error) {
            next(error);
        }
    };
}

export default new CategoryController();
