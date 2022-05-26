import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import TeachersList from "./components/pages/Teachers/View/TeachersList";
import AddTeacher from "./components/pages/Teachers/Add/AddTeacher";
import TeachersView from "./components/pages/Teachers/View/TeachersView";
import StudentsList from "./components/pages/Students/view/StudentsList";
import AddStudent from "./components/pages/Students/Add/AddStudents";
import PersonalDetails from "./components/pages/Students/Add/PersonalDetails";
import EducationalDetails from "./components/pages/Students/Add/EducationalDetails";
import FamilyDetails from "./components/pages/Students/Add/FamilyDetails";
import Register from "./components/pages/Users/Register";
import Login from "./components/pages/Users/Login";
import AuthLayout from "./components/utils/UserLayout/AuthLayout";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import AddDetails from "./components/pages/Teachers/Add/AddDetails";
import Details from "./components/pages/Students/view/Details";
import ProfileProvider from "./context/profileContext";
import StudentProvider from "./context/studentContext";
import Dependencies from "./components/pages/Students/Add/Dependencies";
import DepartmentDetails from "./components/pages/Department/Dpt-details/DptDetails";
import Add from "./components/pages/Department/Add/Add";
import DptStudentList from "./components/pages/Department/List/DptStudentList";
import ParticipantList from "./components/pages/Participants/View/ParticipantList";
import SheduleList from "./components/pages/Shedule/View/SheduleList";
import AddShedule from "./components/pages/Shedule/Add/AddShedule";
import MarkView from "./components/pages/MarkEntry/View/MarkView";
import AddMark from "./components/pages/MarkEntry/Add/AddMark";
import EventsAdd from "./components/pages/Events/Add/EventsAdd";
import EventsList from "./components/pages/Events/View/EventsList"

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />

      {/* Student data provider */}
      <StudentProvider>
        {/* User profile provider */}
        <ProfileProvider>
          <Routes>
            {/* Home routes (Dashboard) */}
            <Route path="/app" element={<DashboardLayout />}>
              <Route path="/app" element={<Navigate to="/app/home" />} />
              <Route path="home" element={<Home />} />

              {/* Teachers routes (Dashboard)*/}
              <Route path="teacher">
                <Route
                  path="/app/teacher"
                  element={<Navigate to="/app/teacher/list" />}
                />
                <Route path="view/:id" element={<TeachersView />} />
                <Route path="list" element={<TeachersList />} />
                <Route path="add" element={<AddTeacher />} />
              </Route>

              {/* students routes (Dashboard)*/}
              <Route path="student">
                <Route
                  path="/app/student"
                  element={<Navigate to="/app/student/list" />}
                />
                <Route path="list" element={<StudentsList />} />
                <Route path="add" element={<AddStudent />} />
                <Route path="view/:id" element={<Details />} />
              </Route>
              <Route path="department">
                <Route
                  path="/app/department"
                  element={<Navigate to="/app/department/list" />}
                />
                <Route path="list" element={<DepartmentDetails />} />
                <Route path="details" element={<DptStudentList />} />
                <Route path="student/:id" element={<Details />} />
                <Route path="add" element={<Add />} />
              </Route>

              {/*participants list */}
              <Route path="/app/participants" element={<ParticipantList />} />

              {/*shedule list */}
              <Route path="shedule" >
                <Route path="/app/shedule" element={<SheduleList />}/>
                <Route path="add" element={<AddShedule />}/>
                <Route/>
              </Route>
              
              {/*events list */}
              <Route path="events" >
                <Route path="/app/events" element={<EventsList />}/>
                <Route path="add" element={<EventsAdd />}/>
                <Route/>
              </Route>


              <Route path="markentry" >
                <Route path="/app/markentry" element={<MarkView />}/>
                <Route path="add" element={<AddMark />}/>
                <Route/>
              </Route>


            </Route>

            {/* user routes */}
            <Route path="/user" element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="recover" element={<RecoverPassword />} />
            </Route>

            {/* teacher details forms routes */}
            <Route path="/teacher/details">
              <Route path="personal" element={<AddDetails />} />
            </Route>

            {/* student details forms routes */}
            <Route path="/student/details">
              <Route path="personal" element={<PersonalDetails />} />
              <Route path="educational" element={<EducationalDetails />} />
              <Route path="family" element={<FamilyDetails />} />
              <Route path="dependencies" element={<Dependencies />} />
            </Route>
            <Route path="/" element={<Navigate to="/user/login" />} />

            
          </Routes>
        </ProfileProvider>
      </StudentProvider>
    </ThemeConfig>
  );
}

export default App;
