
import "./App.css";
import Head from "./Head";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./utils/Store"; 

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
}

export default App;
