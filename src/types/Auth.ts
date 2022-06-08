export type TypeLogin = {
    email: string,
    password: string
}
export type TypeLoginResponse = {
    token: string,
    user: {
      _id: string,
      email: string,
      name: string,
      role: number
    }
}