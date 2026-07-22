import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home";
import TrainersList from "./Components/TrainersList";
import TrainerDetails from "./Components/TrainerDetails";

function App() {

  return (

    <BrowserRouter>

      <div>

        <h1>Cognizant Academy</h1>

        <nav>

          <Link to="/">
            Home
          </Link>

          {" | "}

          <Link to="/trainers">
            Trainers
          </Link>

        </nav>

        <hr />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/trainers"
            element={<TrainersList />}
          />

          <Route
            path="/trainer/:id"
            element={<TrainerDetails />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;