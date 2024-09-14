import { Email, Errors } from "../../../../src/core/common"

test("Deve criar um email válido", () => {
  const email = new Email("fulano@zmail.com")
  expect(email.value).toBe("fulano@zmail.com")
})

test("Deve retornar o nome do usuário", () => {
  const email = new Email("fulano@zmail.com")
  expect(email.user).toBe("fulano")
})

test("Deve retornar o domínio", () => {
  const email = new Email("fulano@zmail.com")
  expect(email.domain).toBe("zmail.com")
})

test("Deve lançar erro ao criar um email inválido", () => {
  expect(() => new Email()).toThrow(Errors.EMAIL_INVALIDO)
  expect(() => new Email("")).toThrow(Errors.EMAIL_INVALIDO)
  expect(() => new Email("fulano")).toThrow(Errors.EMAIL_INVALIDO)
  expect(() => new Email("fulano@zmailcom")).toThrow(Errors.EMAIL_INVALIDO)
})
