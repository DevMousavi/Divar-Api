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
