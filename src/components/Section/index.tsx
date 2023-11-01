type SectionType = {
  children?: React.ReactNode;
};
export const Section: React.FC<SectionType> = (props) => {
  return props.children ? (
    <section className="text-gray-400 body-font h-full">
      <div className="container px-5 py-5 mx-auto">{props.children}</div>
    </section>
  ) : null;
};
