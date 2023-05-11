export class TMDBResponseError extends Error {
  public message: string
  public statusCode: number
  public statusMessage: string

  constructor(message: string, statusMessage: string, statusCode: number) {
    super(message)

    this.message = message
    this.statusMessage = statusMessage
    this.statusCode = statusCode

    Object.setPrototypeOf(this, TMDBResponseError.prototype)
  }

  public getResponse() {
    return {
      status: this.message,
      status_code: this.statusCode,
      status_message: this.statusMessage,
    }
  }
}
