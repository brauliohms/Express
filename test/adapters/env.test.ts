import { env } from "../../src/adapters"

test("Can be have a API_PORT", () => {
  const PORT = env.API_PORT
  expect(PORT).toMatch(/^\d{4,5}$/)
})

test("Can be contain a valid LOGGER_LEVELINFO", () => {
  const loggerTypes = ["dev", "combined", "common", "short", "tiny"]
  expect(loggerTypes).toContain(env.LOGGER_LEVELINFO)
})

test("Can be contain a valid PROVIDER", () => {
  const providerTypes = ["sqlite", "postgresql"]
  expect(providerTypes).toContain(env.PROVIDER)
})

test("Can be a valid DATABASE_URL", () => {
  const databaseUrlPostgres = /^postgres:\/\/.*:.*@.*:\d{4}\/.*$/
  const databaseUrlSqlite = /^file:.*$/
  expect(
    databaseUrlPostgres.test(env.DATABASE_URL) ||
      databaseUrlSqlite.test(env.DATABASE_URL),
  ).toBeTruthy()
})
