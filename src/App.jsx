import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import Calender from "./pages/Application/Calender";
import Chat from "./pages/Application/Chat";
import Contacts from "./pages/Application/Contacts";
import Email from "./pages/Application/Email";
import FileManager from "./pages/Application/FileManager";
import Invoices from "./pages/Application/Invoices";
import KanbanBoard from "./pages/Application/KanbanBoard";
import Notes from "./pages/Application/Notes";
import Projects from "./pages/Application/Projects";
import SocialFeed from "./pages/Application/SocialFeed";
import ToDo from "./pages/Application/ToDo";
import VideoCall from "./pages/Application/VideoCall";
import VoiceCall from "./pages/Application/VoiceCall";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#F9F9FA]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/email" element={<Email />} />
          <Route path="/file" element={<FileManager />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social" element={<SocialFeed />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/voicecall" element={<VoiceCall />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
