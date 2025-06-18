//Модуль 3, задание 1
import React from 'react';
import Message from './components/Message';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  const messageText = 'Привет, это сообщение из пропса!';
  
  return (
    <div>
      <h1>Моё приложение на Vite + React + TypeScript</h1>
      <Message text={messageText} />
    </div>
  );
};
function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
export default App;