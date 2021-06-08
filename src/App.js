import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Navi/>
    </div>
  );
}

export default App;
