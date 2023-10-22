import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Counter from "./components/Counter";
import Error from "./components/404page";
import { ErrorBoundary } from "react-error-boundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Homepage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
