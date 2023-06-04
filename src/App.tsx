import { FC } from "react";
import "./App.css";
import CustomProvider from "./utils/providers";
import AppRouters from "./routes/AppRouters";

const App: FC = () => {
  return (
    <CustomProvider>
      <AppRouters />
    </CustomProvider>
  );
};

export default App;
