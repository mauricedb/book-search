import { getReasonPhrase } from 'http-status-codes';

export class FetchError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message || getReasonPhrase(status));
  }
}
