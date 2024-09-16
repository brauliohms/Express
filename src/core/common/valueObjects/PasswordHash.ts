import { Errors } from "../constants"
import { ErrorValidator } from "../utils"

export class PasswordHash {
  // eslint-disable-next-line no-useless-escape
  private static readonly REGEX = /^\$2[ayb]\$[0-9]{2}\$[A-Za-z0-9\.\/]{53}$/

  constructor(readonly passwordHash?: string) {
    if (!passwordHash || !PasswordHash.isValid(passwordHash)) {
      ErrorValidator.lancar(Errors.SENHA_HASH_INVALIDA, passwordHash)
    }
  }

  static isValid(passwordHash: string): boolean {
    return PasswordHash.REGEX.test(passwordHash)
  }
}
