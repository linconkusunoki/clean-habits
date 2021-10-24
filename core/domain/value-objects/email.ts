export class Email {
  private regularExpression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(value: string) {
    const isValid = this.regularExpression.test(value.toLowerCase())

    if (!isValid) {
      throw new Error('Invalid email')
    }
  }
}
