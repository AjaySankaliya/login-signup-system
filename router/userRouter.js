const express=require('express')
const router=express.Router()
const path=require('path')
const {handleUserSignUp,handleUserLogin}=require('../controller/userController')
const restrictToLoggedInOnly=require('../middleware/userMiddleware')

router.get('/',(req,res)=>{
    res.redirect('/login')
})

router.get('/home', restrictToLoggedInOnly,(req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});


router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/signup.html'));
})

router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public/login.html'));
})

router.get('/logout', (req, res) => {
  res.clearCookie('uid');
  res.redirect('/login?logout=success');
});

router.post('/signup',handleUserSignUp)
router.post('/login',handleUserLogin)

module.exports=router