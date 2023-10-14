// import ContentWrapper from "@/components/ContentWrapper";
import { useTypedDispatch } from "@/store";
import { getAllEntries as getAllBooks } from "@/store/slices/bookSlice";
import { useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminPage: React.FC = () => {
  const asyncDispatch = useTypedDispatch();
  useEffect(() => {
    asyncDispatch(getAllBooks());
  }, [asyncDispatch]);
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
