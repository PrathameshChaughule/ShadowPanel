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
import Members from "./pages/Members/Members";
import Teams from "./pages/Teams/Teams";
import Clients from "./pages/Clients/Clients";
import RolesPermission from "./pages/Roles & Permission/RolesPermission";
import ActivityLogs from "./pages/Activity Logs/ActivityLogs";
import Notifications from "./pages/Notifications/Notifications";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";
import EmailVerification from "./pages/Authentication/EmailVerification";
import StepVerification from "./pages/Authentication/StepVerification";
import ErrorPages from "./pages/Authentication/ErrorPages";
import Settings from "./pages/Settings/Settings";

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
          <Route path="/members" element={<Members />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/rolesPermission" element={<RolesPermission />} />
          <Route path="/activityLogs" element={<ActivityLogs />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPass" element={<ForgetPassword />} />
          <Route path="/resetPass" element={<ResetPassword />} />
          <Route path="/emailVer" element={<EmailVerification />} />
          <Route path="/2step" element={<StepVerification />} />
          <Route path="/error" element={<ErrorPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
