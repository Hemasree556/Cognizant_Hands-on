import { useState } from "react";

import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div style={{ padding: "20px" }}>

            <h1>Ticket Booking App</h1>

            {

                isLoggedIn ?

                    <Logout
                        onLogout={() => setIsLoggedIn(false)}
                    />

                    :

                    <Login
                        onLogin={() => setIsLoggedIn(true)}
                    />

            }

            <hr />

            {

                isLoggedIn ?

                    <UserPage />

                    :

                    <GuestPage />

            }

        </div>

    );

}

export default App;