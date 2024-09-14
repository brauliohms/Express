/* eslint-disable @typescript-eslint/no-explicit-any */
import { Errors } from "../constants"

export interface ErrorValidatorProps {
  codigo?: string
  valor?: any
  extras?: object
}

export class ErrorValidator extends Error {
  readonly codigo: string
  readonly valor?: any
  readonly extras: any

  constructor(readonly props?: ErrorValidatorProps) {
    super(props?.codigo ?? Errors.DESCONHECIDO)
    this.codigo = props?.codigo ?? Errors.DESCONHECIDO
    this.valor = props?.valor
    this.extras = props?.extras ?? {}
  }

  static novo(codigo?: string, valor?: any, extras?: any): ErrorValidator {
    return new ErrorValidator({ codigo, valor, extras })
  }

  static lancar(codigo: string, valor?: any, extras?: any): never {
    throw new ErrorValidator({ codigo, valor, extras })
  }
}
