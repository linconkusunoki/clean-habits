export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
}

export enum HttpStatus {
  ok = 200,
  created = 201,
  serverError = 500,
  notFound = 404,
  badRequest = 400,
}

export type HttpOptions = {
  method: HttpMethod
  headers?: any
  body?: any
}

export type HttpResponse<T = any> = {
  status: HttpStatus
  data?: T
  error?: string
}

export interface HttpClient {
  request<T>(endpont: string, options: HttpOptions): Promise<HttpResponse<T>>
}
