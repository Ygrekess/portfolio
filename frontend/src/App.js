import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import HomePage from "./screens/Home_Page";
import ProjectPage from "./screens/Project_Page";

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/projet/:slug" component={ProjectPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
