import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyB26WicYrZ8x7ql-t5aPSKTocDj6OYuBso',
  authDomain: 'van-life-app-a780e.firebaseapp.com',
  projectId: 'van-life-app-a780e',
  storageBucket: 'van-life-app-a780e.appspot.com',
  messagingSenderId: '262644917336',
  appId: '1:262644917336:web:3d836b42a587bb9b5c562d',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getVans() {
  const vansCollectionRef = collection(db, 'vans');
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const vanSnapshot = await getDoc(docRef);

  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const vansCollectionRef = collection(db, 'vans');
  const q = query(vansCollectionRef, where('hostId', '==', '123'));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.tatus,
    };
  }

  console.log(data);
  return data;
}
