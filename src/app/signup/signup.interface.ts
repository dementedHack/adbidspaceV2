// signup.interface.ts
export interface User {
  name: string;
  account: {
    email: string;
    password: string;
    confirmPassword: string;
  }
}
