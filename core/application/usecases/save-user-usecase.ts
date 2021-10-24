import { UserModel } from '../../domain/models/user'
import { UseCase } from '../../domain/interfaces'
import { UserRepository } from '../../domain/interfaces/user-repository'

export class SaveUser implements UseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: UserModel): Promise<void> {
    this.userRepository.save(data)
  }
}
