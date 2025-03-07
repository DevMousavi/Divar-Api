import express, { Express } from 'express';
import mainRoutes from './src/main.routes';
import { sequelize } from './src/config/sequelize.config';
import swaggerConfig from './src/config/swagger.config';
import errorHandler from './src/utils/errorHandler.utils';

const main = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');

        const app: Express = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use(mainRoutes);
        swaggerConfig(app);
        errorHandler.notFoundRoute(app);
        errorHandler.allError(app);

        const PORT: number = 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}/api-document`);
        });
    } catch (error) {
        console.error('❌ Server failed to start:', error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
};

main();
