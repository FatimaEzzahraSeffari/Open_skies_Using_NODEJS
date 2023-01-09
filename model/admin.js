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
const adminSchema = new mongoose.Schema({  
    firstname4:String,
    lastname4:   String,
    phonenumber4:  String,
    email4: String,
    password4:String,
    retypepassword4:String,
    cb2: String
   

})
const Admin = new mongoose.model("administrateur", adminSchema)
 module.exports =Admin
 