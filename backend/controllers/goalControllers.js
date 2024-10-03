const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json( { message : 'get Goals' })
})


const setGoal = asyncHandler(async (req, res) => {
    
    if(!req.body.test){
        res.status(400)
        throw new Error('Please Input Test')
    }

    res.status(200).json( { message : 'set Goals' })
})

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json( { message : 'get Goals' })
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json( { message : 'get Goals' })
})




module.exports = {
    getGoals,setGoal,updateGoals,deleteGoal
     
}