/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorValidator } from "./ErrorValidator"

export class Validator {
  static combinar(
    ...erros: (ErrorValidator | null)[]
  ): ErrorValidator[] | null {
    const errosFiltrados = erros.filter(
      (erro) => erro !== null,
    ) as ErrorValidator[]
    return errosFiltrados.length > 0 ? errosFiltrados : null
  }

  static naoNulo(valor: any, erro: string): ErrorValidator | null {
    return valor !== null && valor !== undefined
      ? null
      : ErrorValidator.novo(erro, valor)
  }

  static naoVazio(
    valor: string | null | undefined,
    erro: string,
  ): ErrorValidator | null {
    if (Validator.naoNulo(valor, erro)) return ErrorValidator.novo(erro, valor)
    return valor!.trim() !== "" ? null : ErrorValidator.novo(erro, valor)
  }

  static tamanhoMenorQue(
    valor: string | any[],
    tamanhoMaximo: number,
    erro: string,
  ): ErrorValidator | null {
    return valor.length < tamanhoMaximo
      ? null
      : ErrorValidator.novo(erro, valor, { max: tamanhoMaximo })
  }

  static tamanhoMenorQueOuIgual(
    valor: string | any[],
    tamanhoMaximo: number,
    erro: string,
  ): ErrorValidator | null {
    return valor.length <= tamanhoMaximo
      ? null
      : ErrorValidator.novo(erro, valor, { max: tamanhoMaximo })
  }

  static tamanhoMaiorQue(
    valor: string | any[],
    tamanhoMinimo: number,
    erro: string,
  ): ErrorValidator | null {
    return valor.length > tamanhoMinimo
      ? null
      : ErrorValidator.novo(erro, valor, { min: tamanhoMinimo })
  }

  static tamanhoMaiorQueOuIgual(
    valor: string | any[],
    tamanhoMinimo: number,
    erro: string,
  ): ErrorValidator | null {
    return valor.length >= tamanhoMinimo
      ? null
      : ErrorValidator.novo(erro, valor, { min: tamanhoMinimo })
  }

  static regex(
    valor: string,
    regex: RegExp,
    erro: string,
  ): ErrorValidator | null {
    return regex.test(valor) ? null : ErrorValidator.novo(erro, valor)
  }
}
