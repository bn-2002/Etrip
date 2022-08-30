import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListProvider } from './store/ListContext';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="list"
          element={
            <ListProvider>
              <List />
            </ListProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/// update to react 18
////shared layout component

///scroll snapping
