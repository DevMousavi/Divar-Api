import { DataTypes, Model } from '@sequelize/core';
import { sequelize } from '../../config/sequelize.config';
import { CategoryModelType } from '../../types/category/category.model.type';

class CategoryModel extends Model<CategoryModelType> {}

CategoryModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false,

            validate: {
                notEmpty: { msg: 'نام دسته‌بندی نمی‌تواند خالی باشد.' },
                len: {
                    args: [3, 255],
                    msg: 'نام دسته‌بندی باید حداقل 3 کاراکتر و حداکثر 255 کاراکتر باشد.',
                },
                is: {
                    args: /^[a-zA-Z\s]+$/,
                    msg: 'نام دسته‌بندی باید فقط شامل حروف الفبا باشد.',
                },
            },
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'نام فایل نمی‌تواند خالی باشد.' },
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [0, 500],
                    msg: 'توضیحات باید حداکثر 500 کاراکتر باشد.',
                },
            },
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isInt: { msg: 'parentId باید یک عدد صحیح باشد.' },
            },
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize: sequelize,
        tableName: 'categories',
        timestamps: true,
        modelName: 'CategoryModel',
        hooks: {
            beforeCreate: (category: Model<CategoryModelType>) => {
                if (category.getDataValue('name')) {
                    category.setDataValue('name', category.getDataValue('name').trim());
                }

                if (category.getDataValue('fileName')) {
                    category.setDataValue('fileName', category.getDataValue('fileName').trim());
                }

                if (category.getDataValue('description')) {
                    category.setDataValue('description', category.getDataValue('description').trim());
                }
            },
            beforeUpdate: (category: Model<CategoryModelType>) => {
                if (category.getDataValue('name')) {
                    category.setDataValue('name', category.getDataValue('name').trim());
                }

                if (category.getDataValue('fileName')) {
                    category.setDataValue('fileName', category.getDataValue('fileName').trim());
                }

                if (category.getDataValue('description')) {
                    category.setDataValue('description', category.getDataValue('description').trim());
                }

                const parentId: number | undefined = category.getDataValue('parentId');
                if (parentId !== undefined && isNaN(Number(parentId))) {
                    throw new Error('parentId باید یک عدد صحیح باشد.');
                }
            },
        },
    }
);

CategoryModel.belongsTo(CategoryModel, { foreignKey: 'parentId', as: 'parent' });
export default CategoryModel;
