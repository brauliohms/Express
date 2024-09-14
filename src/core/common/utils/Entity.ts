import { Id } from "../valueObjects/Id"

export interface EntityProps {
  id?: string
}

export abstract class Entity<Type, Props extends EntityProps> {
  readonly id: Id
  readonly props: Props

  public constructor(props: Props) {
    this.id = new Id(props.id)
    this.props = { ...props, id: this.id.value }
  }
  public equal(otherEntity: Entity<Type, Props>): boolean {
    return this.id.equal(otherEntity.id)
  }
  public different(otherEntity: Entity<Type, Props>): boolean {
    return this.id.different(otherEntity.id)
  }

  public clone(newProps: Props, ...args: unknown[]): Type {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this.constructor as any)(
      {
        ...this.props,
        ...newProps,
      },
      ...args,
    )
  }
}
