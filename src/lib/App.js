import React from 'react';
import { render } from "react-dom";
import ChatBot from './chatbotArea/ChatBotArea'

const App = () => (
  <ChatBot/>
);

render(<App />, document.getElementById("root"));