// import ContentWrapper from "@/components/ContentWrapper";
import { useTypedDispatch } from "@/store";
import { getAllEntries as getAllBooks } from "@/store/slices/bookSlice";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AddBookForm } from "@/components/Forms/AddBookForm";
import { Sidebar } from "@/components/Sidebar";

const AdminPage: React.FC = () => {
  const asyncDispatch = useTypedDispatch();
  useEffect(() => {
    asyncDispatch(getAllBooks());
  }, [asyncDispatch]);
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="p-2">
        <Routes>
          <Route path="books" element={<AddBookForm />} />
          {/* <Route path="authors" element={<DashboardTasks />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
