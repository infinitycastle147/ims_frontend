import Axios from "axios";
import { url } from "./index";

export const Login = async ({ username, password }) => {
  const userData = {
    username: username,
    password: password,
  };

  // Clear local storage
  localStorage.removeItem("jwt");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
  localStorage.removeItem("id");
  localStorage.removeItem("password");

  // The backend is inconsistent about how it reports bad credentials: an
  // existing user with a wrong password resolves with HTTP 200 and a literal
  // "Credentials Invalid !!" string body, while an unknown username rejects
  // with HTTP 401 and a raw internal error message. Neither of those bodies
  // is safe to show a user directly, so both paths collapse to one message.
  const INVALID_CREDENTIALS_MESSAGE = "Invalid email or password.";

  try {
    const response = await Axios.post(`${url}/auth/login`, userData);

    if (!response.data?.token) {
      return { message: INVALID_CREDENTIALS_MESSAGE, success: false };
    }

    localStorage.setItem("jwt", response.data.token);
    localStorage.setItem("email", response.data.username);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("id", response.data.id);
    localStorage.setItem("password", userData.password);
    return { message: response.data, success: true };
  } catch (e) {
    return { message: INVALID_CREDENTIALS_MESSAGE, success: false };
  }
};

export const Logout = async () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
  localStorage.removeItem("id");
  localStorage.removeItem("password");
  window.location.href='/';
};

// change password
export const change_Password = async (data) => {
  const token = localStorage.getItem("jwt");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  try {
    const response = await Axios.post(`${url}/auth/change-password`, data, config);
    return response.data;
  } catch (e) {
    return { success: false };
  }
};
