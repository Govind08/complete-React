import './App.css';
import LightAndDarkMode from './LightAndDarkMode';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { ThemeContext, themes } from './theme-context';


function App() {
  const [theme, settheme] = useState(themes.light)

  const changeTheme=()=>{
    theme === themes.light ? settheme(themes.dark): settheme(themes.light)
  }
  return (
  <ThemeContext.Provider value={{theme, changeTheme}}>
     <LightAndDarkMode/>
     </ThemeContext.Provider>
   
  );
}

export default App;
