import { Errors, ErrorValidator } from "../../../../src/core/common"

test("Deve lançar um erro", () => {
  expect(() => ErrorValidator.lancar("Erro", "Valor")).toThrow("Erro")
})

test("Deve criar um erro com código e valor", () => {
  const erro = new ErrorValidator({
    codigo: Errors.EMAIL_INVALIDO,
    valor: "gustavo@",
  })
  expect(erro.codigo).toBe(Errors.EMAIL_INVALIDO)
  expect(erro.valor).toBe("gustavo@")
})

test("Deve criar um erro com código, valor e extras", () => {
  const erro = new ErrorValidator({
    codigo: Errors.NOME_PEQUENO,
    valor: "Pedro",
    extras: { min: 6 },
  })
  expect(erro.codigo).toBe(Errors.NOME_PEQUENO)
  expect(erro.valor).toBe("Pedro")
  expect(erro.extras.min).toEqual(6)
})

test("Deve criar um erro sem código", () => {
  const e1 = ErrorValidator.novo()
  const e2 = new ErrorValidator()
  expect(e1.codigo).toBe(Errors.DESCONHECIDO)
  expect(e2.codigo).toBe(Errors.DESCONHECIDO)
})
