export interface UseCase<In, Out> {
  execute(dto: In): Promise<Out>
}
