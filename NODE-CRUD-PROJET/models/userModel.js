import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


//Schema
const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
//Pré hook - Avant d'enregistrer dans mongo (grantire la sécurité, ici 10 tour de hachement , avant de l'enregistrer dans mongo )


UserSchema.pre('save',async function (next){
    const user = this


    const hash = await bcrypt.hash(user.password,10)


    user.password = hash

    next()

})


//Ajouter une méthode pour vérifier le password (si le mot de passe entrélors de l'inscription correspand à la meme mot de passe qui est stockée dans notre base de données )


UserSchema.methods.isValidPassword = async function (password){
    const user = this
    

    const isSame = await bcrypt.compare(password, user.password)


    return isSame //Return true ou false


}




const UserModel = mongoose.model('User', UserSchema)

export default UserModel