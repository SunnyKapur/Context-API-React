import { createContext } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {
  return (
    <todocontext.Provider value={"hello from HOC context"}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
