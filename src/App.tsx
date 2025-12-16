import { RouterProvider } from "react-router";
import { router } from "./Routes/Index";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
