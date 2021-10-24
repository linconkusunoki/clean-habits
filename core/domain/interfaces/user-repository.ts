import { UserModel } from '../models'

export interface UserRepository {
  save(user: UserModel): Promise<UserModel[]>
}
