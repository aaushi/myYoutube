
import "./App.css";
import Head from "./Head";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./utils/Store"; 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Watch from "./Watch";
import ReactDOM from "react-dom/client";
import MainContainer from "./MainContainer";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<Watch/>
      }
    ]

  },
])

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

//ReactDOM.createRoot(document.getElementById("root")).render()
export default App;
