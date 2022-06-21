const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: "192.185.176.240",
    user: "casadoma_li_user",
    password: "$$GLoyPB8^MK",
    database: "casadoma_li"
});



app.post("/register", (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], 
    (err, result) => {
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            bcrypt.hash(senha, saltRounds, (err, hash) => {
                db.query("INSERT INTO usuarios (email, senha) VALUES (?, ?)", 
                [email, hash], (err, result) => {
                    if(err){
                        res.send(err);
                    }
                    res.send({msg: "Cadastrado com sucesso"});
                });
            });            
        }else{
            res.send({msg: "Usuário já cadastrado"});
        }

    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    db.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [email], (err, result) => {
            if(err){
                res.send(err);
            }
            if(result.length > 0) {
                bcrypt.compare(senha, result[0].senha,
                (erro, result) => {
                    if(result) {
                        res.send({ msg: "Usuário logado com sucesso" });
                    } else {
                        res.send({ msg: "Senha está incorreta" });
                    }                    
                })                
            }else{
                res.send({ msg: "conta não encontrada" });
            }
        }
    )
})

/*
app.get('/', (req, res) => {
    db.query(
        "INSERT INTO usuarios (email, senha) VALUES ('test_1@teste.com', '12345678')", (err, result) => {
            if(err){
                console.log(err)
            }
        }
    );
});
*/

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})