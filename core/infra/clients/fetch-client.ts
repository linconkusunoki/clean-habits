import {
  HttpClient,
  HttpMethod,
  HttpOptions,
  HttpResponse,
} from '../../domain/interfaces/http-client'

export class FetchClient implements HttpClient {
  async request<T = any>(
    endpoint: string,
    options: HttpOptions
  ): Promise<HttpResponse<T>> {
    const fetchOptions: HttpOptions = {
      method: HttpMethod.get,
    }
    fetchOptions.method = options.method
    fetchOptions.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body)
    }

    const response = await fetch('/api' + endpoint, fetchOptions)
    const result = await response.json()

    if (response.status >= 400) {
      return {
        status: response.status,
        error: result.message,
      }
    }

    return {
      status: response.status,
      data: result,
    }
  }
}
