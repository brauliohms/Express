import "dotenv/config"
import { z } from "zod"

const MSG_API = "API_PORT deve ser um número entre 1000 a 9999"
const MSG_PROVIDER = "PROVIDER dever ser 'sqlite' ou 'postgresql'"
const MSG_DATABASE_URL =
  "DATABASE_URL dever ser uma string de conexão 'postgres://user:pass@localhost:5432/dbname' ou 'file:./db.sqlite'"

// TODO: adicionar CORS_ORIGIN
const envSchema = z.object({
  API_PORT: z
    .string({
      invalid_type_error: MSG_API,
    })
    .regex(/^\d+$/, {
      message: MSG_API,
    })
    .min(4, { message: MSG_API })
    .max(4, { message: MSG_API })
    .default("8000"),
  LOGGER_LEVELINFO: z
    .enum(["dev", "combined", "common", "short", "tiny"])
    .default("dev"),
  NODE_ENV: z.string().default("dev"),
  PROVIDER: z.enum(["sqlite", "postgresql"], { message: MSG_PROVIDER }),
  DATABASE_URL: z.string({ message: MSG_DATABASE_URL }),
})

export const env = envSchema.parse(process.env)
