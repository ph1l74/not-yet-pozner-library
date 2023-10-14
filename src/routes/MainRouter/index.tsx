import { AddBookForm } from "@/components/Forms/AddBookForm";
import AdminPage from "@/pages/AdminPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { MainPage } from "@/pages/MainPage";
import { Routes, Route } from "react-router-dom";
export const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage error={404} />} />
      <Route path="/" element={<MainPage />}>
        <Route path="books" />
        <Route path="authors" />
        <Route path="interviews" />
        <Route path="analytics" />
      </Route>
      <Route path="admin/" element={<AdminPage />}>
        <Route index />
        <Route path="books" element={<AddBookForm />} />
        <Route path="authors" element={<AddBookForm />} />
        <Route path="interviews" element={<AddBookForm />} />
      </Route>
    </Routes>
  );
};
