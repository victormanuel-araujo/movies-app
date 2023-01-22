export interface ErrorResponse {
  status_code: number;
  status_message: number;
}

export type Result<T> = () => Promise<ErrorResponse | T>;
