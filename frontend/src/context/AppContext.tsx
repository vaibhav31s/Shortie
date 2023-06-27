import { createContext, useState } from "react";
import { Url } from "../utils/types/Url";
import axios from "axios";

export const AppContext = createContext<{
  urls: Url[];
  setUrls: Function;
  fetchUrls: Function;
  showNotification: Function;
  noti: string;
  setNoti: Function;
}>({
  urls: [],
  setUrls: () => {},
  fetchUrls: () => {},
  showNotification: () => {},
  noti: "",
  setNoti: () => {},
});

export function AppContextProvider({ children }: any) {
  const [urls, setUrls] = useState<Url[]>([]);
  const [noti, setNoti] = useState<string>("");

  const showNotification = (message: string) => {
    setNoti(message);
    setTimeout(() => {
      setNoti("");
    }, 3000);
  };

  const fetchUrls = async (uid: string) => {
    setUrls([]);
    const res = await axios
      .get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/urls?id=${uid}`)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    setUrls(res);
  };

  return (
    <AppContext.Provider
      value={{ urls, setUrls, fetchUrls, showNotification, noti, setNoti }}
    >
      {children}
    </AppContext.Provider>
  );
}
