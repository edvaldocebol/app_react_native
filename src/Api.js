import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        try {
            const req = await fetch(`${BASE_API}/auth/refresh`, {
                method: 'POST',
                headers: { // Correção: header para headers
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            });

            const json = await req.json();
            return json;
        } catch (error) {
            console.error('Erro na requisição checkToken:', error);
            throw error; // Lança o erro novamente para que o chamador possa lidar com ele
        }
    },

    signIn: async (email, password) => {
        try {
            const req = await fetch(`${BASE_API}/auth/login`, {
                method: 'POST',
                headers: { // Correção: header para headers
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const json = await req.json();
            return json;
        } catch (error) {
            console.error('Erro na requisição signIn:', error);
            throw error;
        }
    },

    signUp: async (name, email, password) => {
        try {
            const req = await fetch(`${BASE_API}/user`, {
                method: 'POST',
                headers: { 
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            const json = await req.json();
            return json;
        } catch (error) {
            console.error('Erro na requisição signUp:', error);
            throw error;
        }
    }

};
