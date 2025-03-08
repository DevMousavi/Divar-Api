/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - fileName
 *       properties:
 *         name:
 *           type: string
 *           minLength: 3
 *           maxLength: 255
 *           pattern: '^[a-zA-Z\s]+$'
 *           description: Category name (only letters and spaces allowed)
 *         fileName:
 *           type: string
 *           description: File name associated with the category
 *         description:
 *           type: string
 *           maxLength: 500
 *           nullable: true
 *           description: Optional description for the category
 *         parentId:
 *           type: integer
 *           format: int32
 *           nullable: true
 *           description: ID of the parent category if this is a subcategory
 *         isActive:
 *           type: boolean
 *           default: true
 *           description: Category status flag
 */

/**
 * @swagger
 * /category/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - fileName
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 255
 *                 pattern: 'unique Name'
 *               fileName:
 *                 type: string
 *               description:
 *                 type: string
 *                 maxLength: 500
 *               parentId:
 *                 type: integer
 *                 format: int32
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Category created successfully
 */
/**
 * @swagger
 * /category/list:
 *   get:
 *     summary: Get a paginated list of categories
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: pageIndex
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: itemsPerPage
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Successfully retrieved categories
 */
