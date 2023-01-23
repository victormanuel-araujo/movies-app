export interface ErrorResponse {
  status_code: number;
  status_message: number;
}

export type Result<T> = (...args: any) => Promise<ErrorResponse | T>;

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  dates: {
    minimum: string;
    maximum: string;
  };
  total_pages?: number;
  total_results?: number;
}
