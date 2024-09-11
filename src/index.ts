import cors from "cors"
import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import { env } from "./adapters"

// Configuração Ambiente ----------------------------------------------
const porta = env.API_PORT
const logger = env.LOGGER_LEVELINFO
const environment = env.NODE_ENV
console.log(`🟢 ENVIRONMENT: ${environment} 🟢`)

// Inicia Servidor Express ------------------------------------------
const app = express()

// Configuração Básica ----------------------------------------------
// cors({
//   origin: process.env.CORS_ORIGIN,
//   optionsSuccessStatus: 200,
// });
app.use(cors())
app.use(morgan(logger))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(porta, () => console.log(`🔥 Server is running on port ${porta}`))
