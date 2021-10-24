export class Password {
  constructor(value: string) {
    const isValid = value.length >= 8

    if (!isValid) {
      throw new Error('Invalid password')
    }
  }
}
