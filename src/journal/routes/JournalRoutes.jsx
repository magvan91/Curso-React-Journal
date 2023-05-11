import { Navigate, Route, Routes } from "react-router";
import { JournalPage } from "../JournalPage";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/*" element={<Navigate to="/"  />} />
    </Routes>
  );
};