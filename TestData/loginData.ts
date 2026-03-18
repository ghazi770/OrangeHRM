export interface LoginData {
  scenario: string
  username: string
  password: string
  expected: 'success' | 'error' | 'validation'
}

export const loginData: LoginData[] = [
  {
    scenario: 'Valid Login',
    username: 'Admin',
    password: 'admin123',
    expected: 'success'
  },
  {
    scenario: 'Invalid Password',
    username: 'admin',
    password: 'wrong123',
    expected: 'error'
  },
  {
    scenario: 'Invalid Username',
    username: 'wrongUser',
    password: 'admin123',
    expected: 'error'
  },
  {
    scenario: 'Empty Username',
    username: '',
    password: 'admin123',
    expected: 'validation'
  }
]