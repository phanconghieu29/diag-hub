import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfoForm from "./components/UserInfoForm";
import Quiz from "./components/Quiz";
import ThankYou from "./components/ThankYou";
import Test from "./components/ComfirmationForm";
import styles from "./App.module.css";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className={styles.container}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<UserInfoForm setUser={setUser} />}
                    />
                    <Route path="/quiz" element={<Quiz user={user} />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
