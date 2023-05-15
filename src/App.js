import './style.scss';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import Rightsidebar from './Rightsidebar';
function App() {
  return (
   <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <h3 id='Section-title'>Home</h3>
        <Rightsidebar></Rightsidebar>
        <Dashboard></Dashboard>
        

    </div>
  );
}

export default App;
