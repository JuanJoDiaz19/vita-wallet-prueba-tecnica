import Cookies from "js-cookie";

export const useLogout = () => {
  const logout = () => {
    Cookies.remove("currentUserVita");
  };

  return { logout };
};