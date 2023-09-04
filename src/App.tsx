import AdminPage from "@/pages/AdminPage";
import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/Header";
import ContentWrapper from "@/components/ContentWrapper";

function App() {
  return (
    <Provider store={store}>
      <div className="enpl-main">
        <div></div>
        <div className="col-span-10">
          <Header />
          <ContentWrapper>
            <AdminPage />
          </ContentWrapper>
        </div>
        <div></div>
      </div>
    </Provider>
  );
}

export default App;
