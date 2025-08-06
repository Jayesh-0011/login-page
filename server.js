const express= require("express")
const app= express()

const path=require("path")
const data= require("./mongoose.js")
const cookieParser = require("cookie-parser")

app.set("view engine", "ejs")                               //set view engine

app.use(express.static(path.join(__dirname, 'public')))     //stylesheets and scripts for frontend in public document
app.use(express.urlencoded({ extended: true }))             //for submiting forms 
app.use(cookieParser())                                     //for creating cookie

const checkAuth = async (req, res, next) => {           
    const cookiePwd = req.cookies.password;                 //checking if current cookie matches with database (password)

    if (!cookiePwd) {
        return res.redirect("/log-in");         // if cookie  itself doesn't exist (generally when user visits site for the first time)
    }

    // it is certain that cookie exist
    const user = await data.findOne({ password: cookiePwd });       // find if cookie exist in database

    if (user) {         // if cookie exist in database
        next();         // comes out of function and redirects to home page 
    } else {
        res.clearCookie("password");        // wrong cookie (won't happen but still :))
        res.redirect("/log-in");            // asks user to login again
    }
};

app.get('/', checkAuth, (req, res)=>{        // after opening homepage it first goes into the function
    res.render('home')    
})

app.get('/log-in', (req, res)=> {           // adds a login page
    res.render("login") 
})

app.get('/sign-up', (req, res)=> {          // adds a signup page
    res.render("sign-up")
})

app.post("/submit-login", async (req,res)=> {       // a page which renders after submitting but user won't see them 
    let gemail=req.body.email
    let gpwd=req.body.password                      // extracting data from the submitted form
    let found=false                                 // will be used in ejs
    
    let details = await data.find()                 
    for(let i=0; i<details.length; i++) {
        if (details[i].email==`${gemail}` && details[i].password==`${gpwd}`) {          // if data matches with database
            found=true
            res.cookie("password", `${gpwd}`)       // create cookie
            return res.redirect("/")                // redirects to homepage
        }   
    }
    if (found==false) {
        res.send("login failed")            //for furthur editing in login ejs document (red color alert)
    }
})

app.post("/submit-signup", async (req, res)=> {
    let gemail=req.body.email                       // extracting data from the submitted form
    let gpwd=req.body.password
   
    await data.create({email:`${gemail}`, password: `${gpwd}`})     // adding data in database
    
    res.cookie("password", `${gpwd}`)           // create cookie
    res.redirect('/')
})

app.listen(3000)