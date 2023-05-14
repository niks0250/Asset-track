import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import postRoutes from "./routes/posts.js";
// import PgModel from "./models/postMessage.js"
import {locations} from "./models/postMessage.js"
import {Pg as PgModel} from "./models/postMessage.js"

import session from 'express-session';

const app=express();
import passport from "./config/passport-local-strategy.js";
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';
// app.use('/posts',postRoutes);

app.use(express.json());
app.use(bodyParser.json({limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
}));
app.use(session({
    secret: 'blahsomething',
    resave : true,
    saveUninitialized: true
  
  }));
app.use(cookieParser("blahsomething"));
app.use(passport.initialize());
app.use(passport.session());
const CONNECTION_URL='mongodb+srv://vinayak:226Kanoon@cluster0.zwercw7.mongodb.net/pg?retryWrites=true&w=majority'
const PORT = 5000;

// mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true,useUnifiedTopology: true})
//     .then(()=>app.listen(PORT,()=>console.log('Server running on port : ${PORT}')))
//     .catch((error)=>console.log(error.message));
mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT,()=>console.log('Server running on port : 5000'))).catch((error)=>console.log(error.message));
// mongoose.set('useFindAndModify', false);
app.post("/insertLocation",async (req,res)=>{
    const lat=req.body.lati;
    const long=req.body.long;
    const key=req.body.key;

    const loc=new locations({lati:lat,long:long,key:key,})
    try{
         loc.save();
        console.log(loc);
        console.log("saving location in db");
        res.end();
    }
    catch{
        console.log(err);
        res.end();
    }
});

app.use('/auth',authRoute);

app.get("/getLiveLocation",async (req,res)=>{
    locations.find({key:req.query.key}).sort({_id: -1}).limit(1).then((products) => {
        console.log(products)
        products=products[0];
        // console.log("this is get request for location")
        let slice={lati:products.lati,long:products.long,key:products.key,};
        res.send(slice);
    })
})
app.get("/getLocation",async (req,res)=>{
    locations.find({key:req.query.key}).sort({_id: -1}).then((locations) => {
        // console.log(locations)
        // console.log("this is get request for location")
        res.send(locations);
    })
})
app.post("/insert",async (req,res)=>{
    const pname=req.body.pname;
    const paddress=req.body.paddress;
    const pfacilities=req.body.pfacilities;
    const oname=req.body.oname;
    const oemail=req.body.oemail;
    const ocontact=req.body.ocontact;
    const pg=new PgModel({pname: pname,
        paddress: paddress,
        pfacilities: pfacilities,
        oname: oname,
        oemail: oemail,
        ocontact: ocontact,
       })
        try{
            await pg.save();
        }catch{
            console.log(err);
        }
});
app.post("/update",async (req,res)=>{
    const pname=req.body.pname;
    const paddress=req.body.paddress;
    const pfacilities=req.body.pfacilities;
    const oname=req.body.oname;
    const oemail=req.body.oemail;
    const ocontact=req.body.ocontact;
    PgModel.findOne({pname: req.body.pname},function(err,pgmodel){
        if(err){console.log('error in updating asset');return}

        if(!pgmodel){
                return res.redirect('/pg/list/');
        }else{
            pgmodel.pname=pname;
            pgmodel.paddress=paddress;
            pgmodel.pfacilities=pfacilities;
            pgmodel.oname=oname;
            pgmodel.oemail=oemail;
            pgmodel.ocontact=ocontact;
            pgmodel.save();
        }
    });
});
app.get("/read",async (req,res)=>{
    PgModel.find({},(err,result)=>{
        if(err)
        {
            res.send(err);
        }
        res.send(result);
    });
});
