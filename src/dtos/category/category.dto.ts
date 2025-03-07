import { CategoryModelType } from '../../types/category/category.model.type';

class CategoryCreateDto {
    public readonly name: string;
    public readonly fileName: string;
    public readonly isActive: boolean;
    public readonly description: string;
    public readonly parentId?: number;

    constructor(body: Omit<CategoryModelType, 'id' | 'createdAt' | 'updatedAt'>) {
        this.name = body.name;
        this.fileName = body.fileName;
        this.description = body.description;
        this.parentId = body.parentId;
        this.isActive = body.isActive ?? true; // Defaulting to true if isActive is not provided
        Object.freeze(this);
    }
}

export default CategoryCreateDto;
