import { getHostVans, getVans } from './api';
import { requireAuth } from './utils';

export function vansLoader() {
  return getVans();
}

export function vanDetailLoader({ params }) {
  return getVans(params.id);
}

export async function hostVansLoader() {
  await requireAuth();
  return getHostVans();
}

export async function hostVanInfoLoader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}
