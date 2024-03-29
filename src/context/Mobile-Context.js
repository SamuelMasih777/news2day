import { createContext, useContext, useReducer } from "react";
import { MobileReducer } from "../reducer/Mobile-Reducer";

const initialState = {
  title: "",
  category: "",
  content: "",
  image: null,
  video: "",
  creationdate: "",
  statusofnews: "Draft",
};
const MobileContext = createContext();

const MobileProvider = ({ children }) => {
  const [
    { title, category, content, image, video, creationdate, statusofnews },
    mobileDispatch,
  ] = useReducer(MobileReducer, initialState);

  return (
    <MobileContext.Provider
      value={{ title, category, content, image, video, mobileDispatch }}
    >
      {children}
    </MobileContext.Provider>
  );
};
const useMobile = () => useContext(MobileContext);
export { useMobile, MobileProvider };
