import bcrypt from "bcryptjs"
export const validateInput = (email: string, password: number) => {
  return (
    email && password
  )
}


export const comparePassword = (password: string, hashedPassword: string) => {

  return bcrypt.compareSync(password, hashedPassword)
}


