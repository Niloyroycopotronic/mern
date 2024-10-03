const express =  require('express') 
const router  = express.Router()
const { getGoals, setGoal, updateGoals, deleteGoal } = require('../controllers/goalControllers')
 
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoals).delete(deleteGoal)

// router.get('/', getGoals )
// router.post('/', setGoal)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoal)


module.exports = router

