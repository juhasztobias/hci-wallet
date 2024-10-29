// Utilities
import { DummyClient } from '@/dummies/client';
import { defineStore } from 'pinia';

const client = new DummyClient();
export const useAppStore = defineStore('app', () => {
  return {
    client,
    getContactByEmail: (email) => client.getContactByEmail(email),
  }
})
