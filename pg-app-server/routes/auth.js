import passport from '../config/passport-local-strategy.js';
import express from 'express';
import {destroySession,createSession} from '../controllers/users_controllers.js';
const router=express.Router();
router.post("/signin", passport.authenticate(
    'local',
    {failureRedirect: '/pg/signin'},
), createSession);

router.get("/signout", destroySession);

router.get("/login/failed",(req,res)=>{
    res.status(400).json({
        success: false,
        message: "failure",
    });
});
router.get("/login/success",(req,res)=>{
    if(req.user){
    res.status(200).json({
        success: true,
        message: "successful",
        user: req.user,
        cookies: req.cookies,
    });
    }
});
export default router;