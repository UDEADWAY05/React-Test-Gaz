import './index.css';
import { Route, Routes } from 'react-router-dom';
import { WrapperPage } from './pages/wrapperPage';
import { DashBoardPage } from './pages/dashBoardPage';
import { MainPage } from './pages/MainPage';
import { ChatPage } from './pages/ChatPage';

export const paths = {
  home: "/",
  dashBoard: "/dashBoard",
  message: "/message"
};

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={paths.home} element={
            <WrapperPage />
          }>
            <Route index element={<MainPage />} />
            <Route path={paths.dashBoard} element={ 
              <DashBoardPage />
            } />
            <Route path={paths.message} element={<ChatPage />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
