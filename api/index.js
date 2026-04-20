import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./model/schema.js";
import bcrypt from "bcrypt";

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
server.get("/listar-usuarios", async (req, res) => {
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
    try{
        const { nome, senha, email, conferirSenha } = req.body;

        if(!nome || !senha || !email || !conferirSenha){
            throw new Error(res.status(400).json({"message": "Todos os campos devem ser preenchidos."}));
        }
        
        if(senha !== conferirSenha){
            throw new Error(res.status(400).json({"message": "As senhas devem ser iguais."}));
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hash = await bcrypt.hash(senha, salt);


        const newUser = await new User({
            nome: nome,
            senha: hash,
            email: email
        })

        if(!newUser){
            throw new Error(res.status(500).json({"message": "Falha na criação do usuário."}));
        }

        const isSameEmail = await User.findOne({ email: email });

        if(isSameEmail){
            throw new Error(res.status(401).json({"message": "Email já cadastrado."}));
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



server.listen(process.env.PORTA, () => console.log(`Servidor no ar`));