import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";
import LoginPage from "./pages/login/login";
import Business from "./pages/books/business";
import Detective from "./pages/books/detective";
import Fantasy from "./pages/books/fantasy";
import Drama from "./pages/books/drama";
import Psychology from "./pages/books/psychology";
import CategoryIndex from "./pages/books";
import Education from "./pages/books/education";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/books",
    Component: CategoryIndex,
    children: [
      {
        path: "fantasy",
        Component: Fantasy,
      },
      {
        path: "drama",
        Component: Drama,
      },
      {
        path: "detective",
        Component: Detective,
      },
      {
        path: "education",
        Component: Education,
      },
      {
        path: "psychology",
        Component: Psychology,
      },
      {
        path: "business",
        Component: Business,
      },
    ],
  },
]);

function App() {
  return (
    <div
      className={`w-full min-h-screen bg-primary text-dark font-montserrat flex flex-col`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
