export interface UseCase<In, Out> {
  // eslint-disable-next-line no-unused-vars
  execute(dto: In): Promise<Out>
}
