import "./App.css";
import Message from "./components/Message";

const userMessage = {
  userName: "Sergey",
  messageText: `From the point of view of banal erudition, our emotions of this tendency are disqualified by the paradox of our ideas.`,
};

function App() {
  const { userName, messageText } = userMessage;
  return (
    <div className="App">
      <Message name={userName} messageText={messageText} />
    </div>
  );
}

export default App;
