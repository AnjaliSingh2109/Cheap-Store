
import './App.css';
import { Routes, Route } from 'react-router-dom'
import routes from './pages/router'


export const chatServer = "https://cheap-store.onrender.com/";
export const serverAPI = "https://cheap-store.onrender.com/api";

function App() {


    return (
        <Routes >
            {
                routes.map((data, index) => (
                    <Route exact={true} path={data.path} element={data.component} key={index} />
                ))
            }
        </Routes>
    );
}

export default App;
