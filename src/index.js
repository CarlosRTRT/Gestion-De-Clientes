import express from 'express';
import './config.js'
import routes from './routes/clients.routes.js'

import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//Engine
app.set('view engine', 'ejs')
app.set('views', join(__dirname, './views'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//Renders
app.get('/home', (req, res)=> res.render('main'))
app.get('/crearCliente', (req, res)=> res.render('createClient'))
app.get('/clienteCreado', (req, res)=> res.render('clientCreated'))
//CSS
app.use(express.static(join(__dirname, './public')))


app.listen(process.env.PORT)
app.use(express.json())

app.use('/app', routes)





