import { Email } from '../value-objects'
import { UserModel } from '../models'
import { Password } from '../value-objects'
import { UserRepository } from '../interfaces/user-repository'

export class User {
  constructor(private readonly repository: UserRepository) {}

  validate({ email, password }: UserModel) {
    new Email(email)
    new Password(password)
  }

  async save(data: UserModel): Promise<UserModel[]> {
    this.validate(data)
    return await this.repository.save(data)
  }
}
