import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false,
        immutable: true
    },
    coferirSenha: {
        type: String,
        requred: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    criadoEm: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

export default mongoose.model("User", userSchema)