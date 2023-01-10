import Navbar from './components/Navbar';
import NewsAddForm from './components/NewsAddForm';
import NewsFilter from './components/NewsFilter/NewsFilter';
import NewsList from './components/NewsList/NewsList';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Navbar/>
      <div className="content">
        <NewsList />
        <div className="content__page">
          <NewsFilter />
          <NewsAddForm />
        </div>
      </div>
    </div>
  );
}

export default App;
