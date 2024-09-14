import { isValid, ulid } from "ulidx"
import { Errors } from "../constants"
import { ErrorValidator } from "../utils/ErrorValidator"

export class Id {
  readonly value: string
  readonly novo: boolean

  public constructor(value?: string) {
    this.value = value ?? ulid()
    this.novo = !value

    if (!isValid(this.value))
      ErrorValidator.lancar(Errors.ID_INVALIDO, this.value)
  }

  public static get novo() {
    return new Id()
  }

  public equal(otherId: Id): boolean {
    return this.value === otherId.value
  }

  public different(otherId: Id): boolean {
    return this.value !== otherId.value
  }
}
