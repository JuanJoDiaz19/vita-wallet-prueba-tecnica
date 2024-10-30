import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

export class AuthService {
    protected readonly instance: AxiosInstance;

    public constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: "Time out!",
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
            },
        });
    }

    login = async (email: string, password: string) => {
        try {
            const data = new URLSearchParams();
            data.append('email', email);
            data.append('password', password);
            data.append('dev_mode', 'true');

            const res = await this.instance.post(
                "/auth/sign_in",
                data,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "app-name": "ANGIE"
                    }
                }
            );

            return res;

        } catch (error) {
            return null;
        }
    }

    getUser = async () => {

        const cookieString = Cookies.get("currentUserVita")

        try {
            
            if (cookieString) {
                const storedCookie = JSON.parse(cookieString);

                const authHeaders = {
                    'access-token': storedCookie.accesToken,
                    'client':  storedCookie.client,
                    'uid':  storedCookie.uid,
                    'expiry':  storedCookie.expiry,
                    'appName': "ANGIE"
                };

                // Remove any undefined headers
                const cleanHeaders = Object.fromEntries(
                    Object.entries(authHeaders).filter(([_, value]) => value !== undefined)
                );

                const res = await this.instance.get("/profile", {
                    headers: cleanHeaders
                });

                return res;

            }

        } catch (error) {
            console.error('GetUser error:', error);
            return null;
        }
    }

    getTransactions = async () => {
        
        const cookieString = Cookies.get("currentUserVita")

        try {
            
            if (cookieString) {
                const storedCookie = JSON.parse(cookieString);

                const authHeaders = {
                    'access-token': storedCookie.accesToken,
                    'client':  storedCookie.client,
                    'uid':  storedCookie.uid,
                    'expiry':  storedCookie.expiry,
                    'appName': "ANGIE"
                };

                // Remove any undefined headers
                const cleanHeaders = Object.fromEntries(
                    Object.entries(authHeaders).filter(([_, value]) => value !== undefined)
                );

                const res = await this.instance.get("/transactions", {
                    headers: cleanHeaders
                });

                return res;

            }

        } catch (error) {
            console.error('Transactions error:', error);
            return null;
        }
    }

    getGetPrices = async () => {
        
        const cookieString = Cookies.get("currentUserVita")

        try {
            
            if (cookieString) {
                const storedCookie = JSON.parse(cookieString);

                const authHeaders = {
                    'access-token': storedCookie.accesToken,
                    'client':  storedCookie.client,
                    'uid':  storedCookie.uid,
                    'expiry':  storedCookie.expiry,
                    'appName': "ANGIE"
                };

                // Remove any undefined headers
                const cleanHeaders = Object.fromEntries(
                    Object.entries(authHeaders).filter(([_, value]) => value !== undefined)
                );

                const res = await this.instance.get("/users/get_crypto_multi_prices", {
                    headers: cleanHeaders
                });

                return res;

            }

        } catch (error) {
            console.error('Transactions error:', error);
            return null;
        }
    }
}