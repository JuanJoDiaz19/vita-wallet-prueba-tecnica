import { authService } from "@/services";
import Cookies from "js-cookie";

export const useLogin = () => {
    const login = async (username: string, password: string) => {
        try {
            const res = await authService.login(username, password);
            
            if (res) {
                
                // Get specific headers
                const appName = "ANGIE";
                const accesToken = res.headers['access-token'];
                const uid = res.headers['uid'];
                const expiry = res.headers['expiry'];
                const client = res.headers['client'];


                const cookieData = {
                    appName,
                    accesToken,
                    uid,
                    expiry,
                    client,
                };

                const userData = JSON.stringify(cookieData);
                
                try {
                    Cookies.set("currentUserVita", userData, {
                        path: "/",
                        secure: true,
                        sameSite: "strict",
                        expires: 7 // 7 days
                    });

                    const storedCookie = Cookies.get("currentUserVita");
                    if (!storedCookie) {
                        console.error("Failed to set currentUserVita cookie");
                        return false;
                    }

                    return true;
                } catch (error) {
                    console.error("Error setting currentUserVita:", error);
                    return false;
                }
            }
            return false;
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };

    return { login };
};