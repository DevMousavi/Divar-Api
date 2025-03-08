import CategoryCreateDto from '../../dtos/category/category.dto';
import { ServerOperationEnum } from '../../enums/ServerOperation.enum';
import categoryRepository from '../../repositories/category.repository';
import { CategoryModelType } from '../../types/category/category.model.type';
import { CategoryResponse } from '../../types/category/category.response';

class CategoryService {
    public async create(categoryData: CategoryCreateDto): Promise<{ message: string; statusCode: ServerOperationEnum; data: CategoryResponse | null }> {
        const category = await categoryRepository.findByName(categoryData.name);
        if (category !== null) {
            return {
                message: 'دسته بندی با این نام وجود دارد دوباره امتحان کنید',
                statusCode: ServerOperationEnum.WARNING_CODE,
                data: null,
            };
        }

        const newCategory: CategoryModelType | null = await categoryRepository.create(categoryData);

        if (newCategory === null) {
            return {
                message: 'خطایی در ایجاد دسته بندی رخ داده است',
                statusCode: ServerOperationEnum.EXCEPTION_CODE,
                data: null,
            };
        } else {
            return {
                message: 'دسته بندی با موفقیت ایجاد شد',
                statusCode: ServerOperationEnum.SUCCESS_CODE,
                data: null,
            };
        }
    }
    public list = async (
        pageIndex: number = 1,
        itemsPerPage: number = 10
    ): Promise<{
        message: string;
        statusCode: ServerOperationEnum;
        data: {
            categories: CategoryModelType[];
            total: number;
            currentPage: number;
            totalPages: number;
        };
    }> => {
        const { categories, total } = await categoryRepository.list(pageIndex, itemsPerPage);
        const totalPages = Math.ceil(total / itemsPerPage);

        return {
            message: 'دسته بندی ها با موفقیت بازیابی شدند',
            statusCode: ServerOperationEnum.SUCCESS_CODE,
            data: {
                categories,
                total,
                currentPage: pageIndex,
                totalPages,
            },
        };
    };
}

export default new CategoryService();
