import CategoryCreateDto from '../dtos/category/category.dto';
import CategoryModel from '../modules/category/category.module';
import { CategoryModelType } from '../types/category/category.model.type';

class CategoryRepository {
    public async findByName(name: string): Promise<CategoryModelType | null> {
        try {
            const category: CategoryModel | null = await CategoryModel.findOne({
                where: { name },
            });
            return category ? category.toJSON() : null;
        } catch (error) {
            return null;
        }
    }
    public async create(categoryCreateDto: CategoryCreateDto): Promise<CategoryModelType> {
        const category: CategoryModel = await CategoryModel.create({
            name: categoryCreateDto.name,
            fileName: categoryCreateDto.fileName,
            description: categoryCreateDto.description,
            parentId: categoryCreateDto.parentId,
            isActive: categoryCreateDto.isActive,
        });
        return category.toJSON();
    }
    public async list(pageIndex: number = 1, itemsPerPage: number = 10): Promise<{ categories: CategoryModelType[]; total: number }> {
        try {
            const offset = (pageIndex - 1) * itemsPerPage;
            const { count, rows } = await CategoryModel.findAndCountAll({
                order: [['createdAt', 'DESC']],
                offset: offset,
                limit: itemsPerPage,
            });

            return {
                categories: rows.map((category) => category.toJSON()),
                total: count,
            };
        } catch (error) {
            return {
                categories: [],
                total: 0,
            };
        }
    }
}

export default new CategoryRepository();
