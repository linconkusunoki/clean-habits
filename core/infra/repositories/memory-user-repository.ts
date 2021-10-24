import { UserModel } from '../domain/models/user'
import { UserRepository } from '../domain/interfaces/user-repository'

export class MemoryUserRepository implements UserRepository {
  users: UserModel[] = []

  async save(user: UserModel): Promise<UserModel[]> {
    const updatedUsers = [...this.users, user]
    this.users = updatedUsers
    return updatedUsers
  }
}
