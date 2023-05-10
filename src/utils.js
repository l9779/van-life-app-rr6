import { redirect } from 'react-router-dom';
//https://youtu.be/nDGA3km5He4?t=24231
export async function requireAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect('/login');
  }
}
