import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    criadoEm: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

export default mongoose.model("User", userSchema)