import ContentWrapper from "@/components/ContentWrapper";
import { useTypedDispatch } from "@/store";
import { getAllBooks } from "@/store/thunks";
import { useEffect } from "react";

const AdminPage: React.FC = () => {
  const asyncDispatch = useTypedDispatch();
  useEffect(() => {
    asyncDispatch(getAllBooks);
  }, []);
  return <ContentWrapper>smth</ContentWrapper>;
};

export default AdminPage;
