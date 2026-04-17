import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./model/schema.js";

const server = express();
dotenv.config();
server.use(express.json());

// conectando ao MongoDB
try{

    await mongoose.connect(process.env.DB_URL.replace("<db_password>", process.env.DB_PASSWORD))
    await console.log("Conectado ao banco de dados")

} catch(err){
    console.error(err)
}

// pegando todos os Users
server.get("/cadastro", async (req, res) => {
    try{

        const users = await User.find();

        if(!users){
            throw new Error(res.status(500).json({"message": "Erro ao buscar usuários."}));
        }

    res.status(200).json(users);

    } catch(err){
        console.error(err)
    }
})

// criando um novo User
server.post("/cadastro", async (req, res) => {
    const { nome, senha } = req.body;

    try{
        const newUser = new User({
            nome: nome,
            senha: senha
        })

        if(!newUser || !newUser.nome || !newUser.senha){
            throw new Error(res.status(500).json({"message": "Falha na criação do usuário."}));
        }

        await newUser.save();

        res.status(201).json(newUser);
    } catch(err){
        console.error(err);
    }
})

// deleta TODOS os Users
server.delete("/cadastro", async (req, res) => {
    try{

        await User.deleteMany({})

        res.status(200).json({"message": "Usuários deletados com sucesso."});
    } catch(err){
        console.error(err)
    }
})



server.listen(process.env.PORTA, () => console.log(`Funcionando na porta ${process.env.PORTA}`));