import { Request, Response, NextFunction } from 'express';
class CategoryController {
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('ss');
        } catch (error) {
            next(error);
        }
    };
}

export default new CategoryController();
