import { useTodo } from "./hooks/useTodo";
import { MainPage } from "./pages/MainPage";
import { DetailPage } from "./pages/DetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const { todoList } = useTodo();
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#757575',
        dark: '#303f9f',
        light: '#e3f2fd',
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={`/`} element={<MainPage />} />
          {todoList.map((todo) => (
            <Route path={`/${todo.id}`} element={<DetailPage />} key={todo.id} />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;