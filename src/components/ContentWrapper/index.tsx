import { DATA_STORE_TYPE } from "@/constants";
import { useSelector } from "react-redux";
interface ContentWrapperProps {
  children?: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  const isLoading = useSelector(
    (state: { data: DATA_STORE_TYPE }) => state.data.isLoading
  );

  if (children)
    return (
      <div>
        {children} {isLoading ? "loading" : "loaded"}
      </div>
    );
  return null;
};

export default ContentWrapper;
