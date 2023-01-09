const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB="mongodb+srv://fatimaezzahraseffari1:sNAhyTpSMc0Nd96G@cluster0.fuabm9r.mongodb.net/?retryWrites=true&w=majority"; 
//mongoose.connect(mongoDB, function(err))
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));;


//join club schema 
const join1Schema = new mongoose.Schema({
    firstname2:String,
    lastname2:String,
    email2:String,
    CLUB:String,
    why:String,
    Date :String ,
    cb:String
})
const clb=new mongoose.model("clubjoins", join1Schema)
module.exports =clb
