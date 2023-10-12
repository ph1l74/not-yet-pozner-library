type NavigationLinkItemType = {
  to: string;
  children: React.ReactNode;
};

const NavigationLinkItem: React.FC<NavigationLinkItemType> = (props) => {
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
    <div className="h-screen w-screen">
      <aside
        id="sidebar"
        className="fixed h-screen w-64 transition-transform"
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <NavigationList>
            <NavigationLinkItem to="/admin/books">Books</NavigationLinkItem>
          </NavigationList>
          <div className="mt-auto flex">
            <div className="flex w-full justify-between"></div>
          </div>
        </div>
      </aside>
    </div>
  );
};
