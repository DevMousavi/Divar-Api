export interface CategoryModelType {
    name: string;
    fileName: string;
    description: string;
    isActive: boolean;
    id?: number;
    parentId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
