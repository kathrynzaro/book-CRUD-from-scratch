import { client } from './client';

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });

  return user;
}