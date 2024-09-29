const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

router.get('/', authenticateJWT, userController.getAllUsers);
router.get('/:id', authenticateJWT, userController.getUserById);
router.post('/', authenticateJWT, userController.createUser);
router.put('/:id', authenticateJWT, userController.updateUser);
router.delete('/:id', authenticateJWT, userController.deleteUser);

module.exports = router;
