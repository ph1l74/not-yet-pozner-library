interface ContentWrapperProps {
  children?: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {

  if (children) return <div className="flex flex-row">{children}</div>;

  return null;
};

export default ContentWrapper;
