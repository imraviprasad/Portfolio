import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";

const AppRouters: FC = () => {
  //TODO: Use Suspence here
  return (
    <Routes>
      <Route path={"*"} element={<Layout />} />
    </Routes>
  );
};

export default AppRouters;
