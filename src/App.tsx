import AdminPage from "@/pages/AdminPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AdminPage />
    </Provider>
  );
}

export default App;
