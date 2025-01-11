import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);

function App() {
  return (
    <div className={`w-full min-h-screen flex flex-col bg-primary-50`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
