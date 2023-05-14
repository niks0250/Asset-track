import passport from 'passport';
import User from'../models/user.js';
import passportlocal from 'passport-local';
const LocalStrategy=passportlocal.Strategy;

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
},
function(email,password,done){
    console.log("Happy");
    User.findOne({email: email},function(err,user){
        if(err){console.log("error in finding user-->passport");return done(err)}
        if(!user||user.password!=password){
            console.log("Invalid username/password");
            return done(null,false);   
        }

        return done(null,user);

    });
}
));


//serializing the user to decide which key is to kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserializing the user from the key in the cookie

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log("error in finding user-->passport");return done(err)}

        return done(null,user);
    })
});

// passport.checkAuthentication= function(req,res,next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     return res.redirect('/pg/signin');
// }

// passport.setAuthenticatedUser= function(req,res,next){
//     if(req.isAuthenticated()){
//         res.locals.user=req.user;
//     }
//     next();
// }

export default passport;