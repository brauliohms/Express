import { Validator } from "../../../../src/core/common"

test("Deve retornar null com texto não nulo", () => {
  const erro = Validator.naoNulo("Bom dia", "Texto inválido")
  expect(erro).toBeNull()
})

test("Deve retornar erro com texto nulo", () => {
  const msgErro = "Texto inválido"
  const erro = Validator.naoNulo(null, msgErro)
  expect(erro?.codigo).toBe(msgErro)
})

test("Deve retornar null com texto não vazio", () => {
  const erro = Validator.naoVazio("ABC", "Texto vazio")
  expect(erro).toBeNull()
})

test("Deve retornar erro com texto vazio", () => {
  const msgErro = "Texto inválido"
  const e1 = Validator.naoVazio("       ", msgErro)
  expect(e1?.codigo).toBe(msgErro)
})

test("Deve retornar erro com texto null", () => {
  const msgErro = "Texto inválido"
  const e1 = Validator.naoVazio(null, msgErro)
  expect(e1?.codigo).toBe(msgErro)
})

test("Deve retornar erro com texto undefined", () => {
  const msgErro = "Texto inválido"
  const e1 = Validator.naoVazio(undefined, msgErro)
  expect(e1?.codigo).toBe(msgErro)
})

test("Deve retornar null com texto menor que o tamanho máximo", () => {
  const erro = Validator.tamanhoMenorQue("teste", 6, "erro")
  expect(erro).toBeNull()
})

test("Deve retornar erro com texto maior ou igual que o tamanho máximo", () => {
  const erro = Validator.tamanhoMenorQue("Bom dia", 7, "erro")
  expect(erro?.codigo).toBe("erro")
})

test("Deve retornar null com texto menor ou igual que o tamanho máximo", () => {
  const erro = Validator.tamanhoMenorQueOuIgual("teste", 5, "erro")
  expect(erro).toBeNull()
})

test("Deve retornar erro com texto maior que o tamanho máximo", () => {
  const erro = Validator.tamanhoMenorQueOuIgual("Bom dia", 6, "erro")
  expect(erro?.codigo).toBe("erro")
})

test("Deve retornar null com texto maior que o tamanho mínimo", () => {
  const erro = Validator.tamanhoMaiorQue("teste", 4, "erro")
  expect(erro).toBeNull()
})

test("Deve retornar erro com texto menor ou igual que o tamanho mínimo", () => {
  const erro = Validator.tamanhoMaiorQue("Bom dia", 7, "erro")
  expect(erro?.codigo).toBe("erro")
})

test("Deve retornar null com texto maior ou igual que o tamanho mínimo", () => {
  const erro = Validator.tamanhoMaiorQueOuIgual("teste", 5, "erro")
  expect(erro).toBeNull()
})

test("Deve retornar erro com texto menor que o tamanho mínimo", () => {
  const erro = Validator.tamanhoMaiorQueOuIgual("Bom dia", 10, "erro")
  expect(erro?.codigo).toBe("erro")
})

test("Deve validar via regex que só tem números ", () => {
  const erro = Validator.regex("12345678900", /\d{11}/, "erro")
  expect(erro).toBeNull()
})

test("Deve retornar erro via validação de números ", () => {
  const erro = Validator.regex("123A5678900", /\d{11}/, "erro")
  expect(erro?.codigo).toBe("erro")
})

test("Deve combinar os erros", () => {
  const erros = Validator.combinar(
    Validator.naoVazio("", "erro1"),
    Validator.naoVazio("", "erro2"),
    Validator.naoVazio("", "erro3"),
    Validator.naoVazio("Teste", "nao erro 4"),
    Validator.naoVazio("", "erro5"),
  )

  expect(erros?.map((e) => e.codigo)?.join(", ")).toBe(
    "erro1, erro2, erro3, erro5",
  )
})

test("Deve combinar sem erros", () => {
  const erros = Validator.combinar(
    Validator.naoVazio("Bom dia", "erro1"),
    Validator.naoVazio("Boa tarde", "erro2"),
    Validator.naoVazio("Boa noite", "erro3"),
  )

  expect(erros).toBeNull()
})
