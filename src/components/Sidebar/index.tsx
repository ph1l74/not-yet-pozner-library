type NavigationLinkType = {
  to: string;
  children: React.ReactNode;
};

const NavigationLink: React.FC<NavigationLinkType> = (props) => {
  return (
    <li>
      <a
        href={props.to}
        className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
      >
        {props.children}
      </a>
    </li>
  );
};

type NavigationListType = {
  children: React.ReactNode;
};

const NavigationList: React.FC<NavigationListType> = (props) => {
  return <ul className="space-y-2 text-sm font-medium">{props.children}</ul>;
};

export const Sidebar = () => {
  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <NavigationList>
        <NavigationLink to="books">Books</NavigationLink>
      </NavigationList>
    </div>
  );
};
