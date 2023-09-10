import AdminPage from "@/pages/AdminPage";
import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/Header";
import { BrowserRouter } from "react-router-dom";
import ContentWrapper from "@/components/ContentWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="enpl-main">
            <Header />
            <div></div>
            <ContentWrapper>
              <AdminPage />
            </ContentWrapper>
            <div></div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
