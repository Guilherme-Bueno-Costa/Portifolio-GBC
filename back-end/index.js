// Import de dependências
import express from 'express'
import dotenv from 'dotenv'

// Import de arquivos

// Inicializa o Dotenv
dotenv.config()

// Inicializa o Express
const app = express()
app.use(cors())
app.use(express.json())

// Inicializa o Mongoose
connectToDatabase()
