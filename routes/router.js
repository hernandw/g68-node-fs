import express from "express";
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/formulario.html')
})

router.post('/newuser', (req, res) => {
    const { name, lastname, email, password } = req.body;//1. traer los datos del formulario
    

    const user = {
        name,
        lastname,
        email,
        password
    }//guardar esos datos en un objeto

//leer los datos antiguos
const data = JSON.parse(fs.readFileSync('data/users.json', 'utf-8')); 

//agregar el nuevo usuario
const usuarios = data.users
usuarios.push(user)

fs.writeFileSync('data/users.json', JSON.stringify(data))

    res.send('usuario creado satisfactoriamente')
})

export default router