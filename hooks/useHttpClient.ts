import { FetchClient } from '../core/infra/clients'
import { HttpClient } from '../core/domain/interfaces/http-client'

export const useHttpClient = (): HttpClient => new FetchClient()
