import { Errors } from "../constants"
import { ErrorValidator } from "../utils"

export class Email {
  private static readonly REGEX =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  readonly value: string

  public constructor(email?: string) {
    this.value = email?.trim() ?? ""

    if (!Email.isValid(this.value))
      ErrorValidator.lancar(Errors.EMAIL_INVALIDO, this.value)
  }

  public get user(): string {
    return this.value.split("@")[0]
  }
  public get domain(): string {
    return this.value.split("@")[1]
  }

  public static isValid(email: string): boolean {
    return Email.REGEX.test(email)
  }
}
