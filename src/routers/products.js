import { Router } from 'express';
import { addProduct, deleteProductsById, getProducts, getProductsById, modificarProducts } from '../dao/DB/productsDB.js';
import { generateMockMusicProducts } from '../middleware/mocking.js';

const router = Router();
router.get('/mockingproducts', (req, res) => {
    const mockProducts = generateMockMusicProducts(100);
    res.status(200).json(mockProducts);
});

router.get('/', getProducts);
router.get('/:pid', getProductsById);
router.post('/', addProduct);
router.put('/:pid', modificarProducts);
router.delete('/:pid', deleteProductsById);

export default router;
