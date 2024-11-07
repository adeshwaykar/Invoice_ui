import { useRoutes } from "react-router-dom";
import ThemeRoutes from "./routes/Router";
import AuthRout from "./routes/AuthRoute";

const App = () => {
  // Apply the ThemeRoutes using useRoutes

  const routes = useRoutes(ThemeRoutes);

  return routes;
};

export default App;
