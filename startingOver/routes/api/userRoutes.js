// const router = require('express').Router();
const User = require('../../models/User')

// //  /api/user

// // get all
// router.get('/', async(req, res) =>{
//     try {
//         const users = await User.find()
//         res.json(users)
//     } catch (error) {

//         res.status(500).json({message: error.message})
//     }
    
// })
// // get one
// router.get('/:id', (req, res) =>{

//     res.send(req.params.id)
    
// })
// // create one
// router.post('/', async (req, res) =>{
    
//     const user = new User({
//        username: req.body.username,
//        email: req.body.email
//     })

//     try {
//         const newUser = await user.save()
//         res.status(201).send('new user saved')
//     } catch {
//         res.status(400).json({message: error.message})

//     }
    
// })
// // update one
// router.patch('/:id', (req, res) =>{
    
    
// })
// // delete one
// router.delete('/:id', (req, res) =>{
    
    
// })



// module.exports = router;


const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:username').get(getSingleUser).delete(deleteUser);

module.exports = router;
