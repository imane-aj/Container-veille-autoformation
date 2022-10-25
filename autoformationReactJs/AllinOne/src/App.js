import './App.css';
import EventsClass from './components/classComponents/EventsClass';
import ExImClass from './components/classComponents/ExImClass';
import PropsClass from './components/classComponents/PropsClass';
import StateClass from './components/classComponents/StateClass';
import Props from './components/functionComponents/Props';
import State from './components/functionComponents/State';
function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-3'>
            <Props name="Imane Ajroudi" ecole="Solicode" color="red"/>
            <PropsClass name="Imane Ajroudi" ecole="Solicode" color="red"/>
        </div>
        <div className='col-md-3'>
          <State />
          <StateClass />
        </div>
        <div className='col-md-3'>
          <ExImClass />
        </div>
        <div className='col-md-3'>
          <EventsClass />
        </div>
      </div>
    </div>
  );
}

export default App;
