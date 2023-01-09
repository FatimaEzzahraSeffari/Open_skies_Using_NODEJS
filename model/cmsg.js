
const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB="mongodb+srv://fatimaezzahraseffari1:sNAhyTpSMc0Nd96G@cluster0.fuabm9r.mongodb.net/?retryWrites=true&w=majority"; 
//mongoose.connect(mongoDB, function(err))
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));;


//Message club schema 
const messageSchema = new mongoose.Schema({
    firstname1:String,
    lastname1:String,
    school1:String,
    subject1:String
    
})
const clubmsg=new mongoose.model("messagesclubs", messageSchema)
module.exports =clubmsg
