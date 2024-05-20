import './index.css';
import { Route, Routes } from 'react-router-dom';
import { WrapperPage } from './pages/wrapperPage';
import { DashBoardPage } from './pages/dashBoardPage';
import { MantineProvider } from '@mantine/core';

export const paths = {
  home: "/",
  dashBoard: "/dashBoard",
  message: "/message"
} 

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <Routes>
          <Route path={paths.home} element={
            <WrapperPage />
          }>
            <Route index element={<h1>Info</h1>}></Route>
            <Route path={paths.dashBoard} element={ 
              <DashBoardPage />
            } />
            <Route path={paths.message} element={<h1>Message</h1>}></Route>
          </Route>
        </Routes>
      </MantineProvider>
    </div>
  )
}

export default App
