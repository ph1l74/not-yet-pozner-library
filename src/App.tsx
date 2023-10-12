// import AdminPage from "@/pages/AdminPage";
import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/Header";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MainRouter } from "./routes/MainRouter";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="h-full flex flex-col justify-between">
            <Header />
            <Section>
              <MainRouter />
            </Section>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
