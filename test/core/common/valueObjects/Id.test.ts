import { Errors, Id } from "../../../../src/core/common"

test("Deve criar um novo id válido", () => {
  const id = new Id()
  expect(id.value).toHaveLength(26)
  expect(id.novo).toBeTruthy()
})

test("Deve lançar erro ao tentar criar um id inválido", () => {
  expect(() => new Id("123")).toThrow(Errors.ID_INVALIDO)
})

test("Deve criar um novo id válido a partir de um id existente", () => {
  const idOld = Id.novo
  const id = new Id(idOld.value)
  expect(id.value).toHaveLength(26)
  expect(id.novo).toBeFalsy()
  expect(id.equal(idOld)).toBeTruthy()
  expect(id.different(idOld)).toBeFalsy()
})

test("Deve testar verdadeiro para ids iguais", () => {
  const id = new Id()
  expect(id.equal(id)).toBeTruthy()
  expect(id.different(id)).toBeFalsy()
})

test("Deve testar falso para ids diferentes", () => {
  const id1 = Id.novo
  const id2 = Id.novo
  expect(id1.equal(id2)).toBe(false)
  expect(id1.different(id2)).toBe(true)
})
