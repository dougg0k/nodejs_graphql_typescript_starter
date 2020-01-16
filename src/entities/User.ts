import { Entity, IdEntity, PrimaryKey, Property } from "mikro-orm";

@Entity()
export class User implements IdEntity<User> {
  @PrimaryKey()
  readonly id!: number;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
