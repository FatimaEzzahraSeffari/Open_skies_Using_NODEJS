const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB="mongodb+srv://fatimaezzahraseffari1:sNAhyTpSMc0Nd96G@cluster0.fuabm9r.mongodb.net/?retryWrites=true&w=majority"; 
//mongoose.connect(mongoDB, function(err))
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));;




//msg contact schema
const msgSchema = new mongoose.Schema({
    name:String,
    email3:String,
    subject:String,
    message3 :String 
})
const Msg=new mongoose.model("messages", msgSchema)
module.exports =Msg
