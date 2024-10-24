import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAuthStore = defineStore("auth", {
    "state": () => ({
        "user": reactive({
            "email": "",
            "password": "",
            "token": "",
            "isLoggedIn": false,
        }),
        "errors": [],
    }),
    "getters": {
        "isLoggedIn": (state) => state.user.isLoggedIn,
        "getUser": (state) => state.user,
    },
    "actions": {
        "login": async ({ state, dispatch }) => {
        },
        "logout": async ({ state, dispatch }) => {}
    },
})