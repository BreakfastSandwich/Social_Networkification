const router = require('express').Router();

//  /api/thought

// get all
router.get('/', (req, res) =>{
    res.send('thought get all')
})
// get one
router.get('/:id', (req, res) =>{

    res.send(req.params.id)
    
})
// create one
router.post('/:id', (req, res) =>{
    
    
})
// update one
router.patch('/:id', (req, res) =>{
    
    
})
// delete one
router.delete('/:id', (req, res) =>{
    
    
})


module.exports = router;