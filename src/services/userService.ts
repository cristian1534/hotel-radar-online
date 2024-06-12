import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserEntity } from '@/domain/UserEntity';
import { auth } from '@/adapters/infrastructure/firebase/firebaseConfig';

interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const addUserAsync = createAsyncThunk<UserEntity, RegisterPayload>(
  'user/addUser',
  async ({ email, password, username }, { rejectWithValue }) => {
   
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userData = userCredential.user;

      await updateProfile(userData, {
        displayName: username,
      });

      const userEntity: UserEntity = {
        uid: userData.uid,
        email: userData.email!,
        displayName: userData.displayName,
        username: username,
        password: '',  
      };
      return userEntity;

    } catch (error: any) {
      console.error("Register error: ", error);
      return rejectWithValue(error.message);
    }
  }
);

export const loginUserAsync = createAsyncThunk<UserEntity, LoginPayload>(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userData = userCredential.user;

      const userEntity: UserEntity = {
        uid: userData.uid,
        email: userData.email!,
        displayName: userData.displayName,
        username: userData.displayName || '',  
        password: '',  
      };

      return userEntity;
    } catch (error: any) {
      console.error("Login error: ", error);
      return rejectWithValue(error.message);
    }
  }
);
