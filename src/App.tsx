//Модуль 3, задание 1
import React from 'react';
import Message from './components/Message';

const App: React.FC = () => {
  const messageText = 'Привет, это сообщение из пропса!';
  
  return (
    <div>
      <h1>Моё приложение на Vite + React + TypeScript</h1>
      <Message text={messageText} />
    </div>
  );
};

export default App;