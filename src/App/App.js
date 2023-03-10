import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home      from '../Pages/Home/Home';
import Books     from '../Pages/Boks/Books';
import Movies    from '../Pages/Movies/Movies';
import NotFound  from '../Pages/NotFound/NotFound';
import Character from '../Pages/Character/Character';
import HeroPage  from '../Pages/HeroPage/HeroPage';

import './App.css';

function App() {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path='/'              element={<Home />} />
                    <Route path='/books'         element={<Books />} />
                    <Route path='/movies'        element={<Movies />} />
                    <Route path='/character'     element={<Character />} />
                    <Route path='/character/:id' element={<HeroPage />} />
                    <Route path='*'              element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;