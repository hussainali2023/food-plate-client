import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" bg-gray-300">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
