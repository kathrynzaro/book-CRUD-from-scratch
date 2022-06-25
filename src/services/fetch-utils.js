import { client } from './client';

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  } else {
    return user;
  }

}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

  return user;
}

export async function logout() {
  await client.auth.signOut();
}

export async function createBook(book) {
  const { data } = await client
    .from('books')
    .insert(book)
    .single();
  
  return data;
}

export async function getBooks() {
  const { data } = await client
    .from('books')
    .select('*');
  
  return data;
}

export async function getBookById(id) {
  const { data } = await client
    .from('books')
    .select('*')
    .match({ id })
    .single();
  
  return data;
}

export async function updateBook(book, id) {
  const { data } = await client
    .from('books')
    .update(book)
    .match({ id })
    .single();
  
  return data;
}

export async function deleteBook(id) {
  const { data } = await client
    .from('books')
    .delete()
    .match({ id: id })
    .single();
  
  return data;
}