import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import "./style.css";

const App = () => {
    const theme = useState("darkblue");
    return (
        <StrictMode>
            <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </BrowserRouter>
            </ThemeContext.Provider>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));



// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "Dog",
//             breed: "Havanese"
//         }),
//         React.createElement(Pet, {
//             name: "Pepper",
//             animal: "Bird",
//             breed: "Cockatiel"
//         }),
//         React.createElement(Pet, {
//             name: "Doink",
//             animal: "Cat",
//             breed: "Mix"
//         }),
//     ]);
// };


// const App = () => {
//     return (
//         <div>
//             <h1>Adopt Me!</h1>
//             <Pet name="Luna" animal="Dog" breed="Havanese" />
//             <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
//             <Pet name="Doink" animal="Cat" breed="Mix" />
//         </div>
//     );
// };