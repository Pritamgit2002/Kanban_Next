import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white w-full h-4 p-8  flex flex-col items-end justify-center bottom-16">
        <div className="flex flex-col">
          <div className="flex items-center font-bold hover:underline text-xl cursor-pointer">
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="flex items-center text-2xl"
            >
              <AiFillGithub />
              Pritam
            </a>
          </div>
        </div>
      </div>
      <KanbanBoard />
    </div>
  );
}

export default App;
