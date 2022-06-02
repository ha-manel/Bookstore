import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BooksList from './components/BooksList';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
