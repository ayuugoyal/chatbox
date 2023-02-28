import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/chatFeed";
import LoginForm from "./components/LoginForm";

const projectID = "f4632e3b-ef20-4e7d-9180-e28dbe4de2c3";


const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};




export default App;
