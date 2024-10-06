const express =  require('express') 
const router  = express.Router()
const { getGoals, setGoal, updateGoals, deleteGoal } = require('../controllers/goalControllers')
 
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoal)

// router.get('/', getGoals )
// router.post('/', setGoal)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoal)


module.exports = router

