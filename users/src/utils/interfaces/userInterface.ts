export interface User {
  id?: string
  firstName: string
  lastName: string
  age: number
  email: string
  password: string
  phoneNo: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  deletedBy?: string
  isDeleted?: boolean
}
