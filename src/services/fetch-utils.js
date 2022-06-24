import { client } from './client';

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });

  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

  return user;
}

export async function logout() {
  const { error } = await client.auth.signOut();
}

export async function createBook(book) {
  const { data, error } = await client
    .from('books')
    .insert(book)
    .single();
  
  return data;
}