const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB="mongodb+srv://fatimaezzahraseffari1:sNAhyTpSMc0Nd96G@cluster0.fuabm9r.mongodb.net/?retryWrites=true&w=majority"; 
//mongoose.connect(mongoDB, function(err))
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));;
    //if (err) throw err;
//})

//user schema
const userSchema = new mongoose.Schema({  
    firstname:String,
    lastname:   String,
    phonenumber:  String,
    email: String,
    password:String,
    retypepassword:String,
    school: String,
    Interests:String,
    motivation: String,
    cb1: String
   

})
const User = new mongoose.model("members", userSchema)
 module.exports =User
 


 