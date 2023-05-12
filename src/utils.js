import { defer, redirect } from 'react-router-dom';

import { getHostVans, getVans, loginUser } from './api';
//https://youtu.be/nDGA3km5He4?t=32911
export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem('loggedIn');
  const pathname = new URL(request.url).pathname;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must login first&redirectTo=${pathname}`
    );
  }
  return null;
}

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export function vansLoader() {
  return defer({ vans: getVans() });
}

export function vanDetailLoader({ params }) {
  return defer({ van: getVans(params.id) });
}

export async function hostVansLoader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export async function hostVanInfoLoader({ params, request }) {
  await requireAuth(request);
  return defer({ van: getHostVans(params.id) });
}

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const pathname =
    new URL(request.url).searchParams.get('redirectTo') || '/host';

  try {
    await loginUser({ email, password });
    localStorage.setItem('loggedIn', true);
    return redirect(pathname);
  } catch (error) {
    return error.message;
  }
};
