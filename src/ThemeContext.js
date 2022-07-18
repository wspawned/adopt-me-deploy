import { createContext } from "react";

// const [theme, setTheme] = useState("darkblue");

const ThemeContext = createContext( ["green", () => {} ]);

export default ThemeContext;