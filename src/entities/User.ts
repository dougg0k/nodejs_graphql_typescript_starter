import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  private _email: string;
  private _password: string;

  @Column("text")
  public get email(): string {
    return this._email;
  }
  public set email(e: string) {
    this._email = e;
  }

  @Column("text")
  public get password(): string {
    return this._password;
  }
  public set password(p: string) {
    this._password = p;
  }
}
