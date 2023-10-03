import ContentWrapper from "@/components/ContentWrapper";
import { useTypedDispatch } from "@/store";
import { getAllBooks } from "@/store/thunks";
import { Sidebar } from "@/components/Sidebar";
import { useEffect } from "react";

const AdminPage: React.FC = () => {
  const asyncDispatch = useTypedDispatch();
  useEffect(() => {
    asyncDispatch(getAllBooks());
  }, []);
  return (
    <ContentWrapper>
      <Sidebar />
    </ContentWrapper>
  );
};

export default AdminPage;
