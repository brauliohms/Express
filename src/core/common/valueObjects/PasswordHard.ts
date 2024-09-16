import { Errors } from "../constants"
import { ErrorValidator } from "../utils"

export class PasswordHard {
  private static readonly REGEX =
    // eslint-disable-next-line no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

  public constructor(readonly password?: string) {
    if (!PasswordHard.isValid(password ?? ""))
      ErrorValidator.lancar(Errors.SENHA_FRACA)
  }

  public static isValid(password: string): boolean {
    return PasswordHard.REGEX.test(password)
  }
}
