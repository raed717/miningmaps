import { createBrowserRouter } from "react-router";

import AppShell from "./app-shell";
import Home from "./routes/home";
import MapView from "./routes/map";
import Dashboard from "./routes/dashboard";
import Projects from "./routes/projects";
import ProjectDetails from "./routes/project-details";
import Contact from "./routes/contact";
import Posts from "./routes/post";
import PostDetails from "./routes/post-details";

function NotFound() {
  return (
    <main className="container flex h-[50vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight text-primary">404</h1>
      <p className="mt-4 text-muted-foreground">The requested page could not be found.</p>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: "map", element: <MapView /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);