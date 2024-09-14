import { Errors, PasswordHard } from "../../../../src/core/common"

test("Deve lançar erro com senha vazia", () => {
  expect(() => new PasswordHard()).toThrow(Errors.SENHA_FRACA)
  expect(() => new PasswordHard("")).toThrow(Errors.SENHA_FRACA)
})

test("Deve lançar erro com senha apenas com números", () => {
  expect(() => new PasswordHard("1234567890")).toThrow(Errors.SENHA_FRACA)
})

test("Deve lançar erro com senha apenas com letras", () => {
  expect(() => new PasswordHard("AbCdEfGhIj")).toThrow(Errors.SENHA_FRACA)
})

test("Deve lançar erro com senha apenas com caracteres especiais", () => {
  expect(() => new PasswordHard("!@#$%¨&*()_+")).toThrow(Errors.SENHA_FRACA)
})

test("Deve lançar erro com senha com menos de 8 caracteres", () => {
  expect(() => new PasswordHard("%S3nh4%")).toThrow(Errors.SENHA_FRACA)
})

test("Deve lançar erro com senha sem letras maiúsculas", () => {
  const senha = "s3nh4f0rt3%"
  expect(() => new PasswordHard(senha)).toThrow(Errors.SENHA_FRACA)
})

test("Deve lançar erro com senha sem caracteres especiais", () => {
  const senha = "S3nh4F0rt3"
  expect(() => new PasswordHard(senha)).toThrow(Errors.SENHA_FRACA)
})

test("Deve criar senha forte", () => {
  const senha = "S3nh4F0rt3%"
  expect(new PasswordHard(senha).password).toBe(senha)
})
