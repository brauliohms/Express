import { Entity, EntityProps, Id } from "../../../../src/core/common"

interface TestEntityProps extends EntityProps {
  nome?: string
  idade?: number
}

class TestEntity extends Entity<TestEntity, TestEntityProps> {
  public constructor(props: TestEntityProps) {
    super(props)
  }
}

test("Deve criar as entidades com diferente id sem passar uma id", () => {
  const entidade1 = new TestEntity({})
  const entidade2 = new TestEntity({})
  expect(entidade1).toBeInstanceOf(TestEntity)
  expect(entidade1.equal(entidade2)).toBeFalsy()
})

test("Deve calcular igualdade para true quando as entidades possuem o mesmo id", () => {
  const id = Id.novo.value
  const entidade1 = new TestEntity({ id })
  const entidade2 = new TestEntity({ id })
  expect(entidade1.equal(entidade2)).toBeTruthy()
})

test("Deve calcular igualdade para false quando as entidades possuem ids diferentes", () => {
  const id1 = Id.novo.value
  const id2 = Id.novo.value
  const entidade1 = new TestEntity({ id: id1 })
  const entidade2 = new TestEntity({ id: id2 })
  expect(entidade1.equal(entidade2)).toBe(false)
  expect(entidade1.different(entidade2)).toBe(true)
})

test("Deve clonar uma entidade", () => {
  const entidade = new TestEntity({
    id: Id.novo.value,
    nome: "Fulaninho",
    idade: 20,
  })
  const clone = entidade.clone({ idade: 30 })

  expect(clone.id.value).toBe(entidade.id.value)
  expect(clone.props.nome).toBe(entidade.props.nome)
  expect(clone.props.idade).toBe(30)
})
