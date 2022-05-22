import Props from './props';
import PropsDrill from './PropsDrill';
import AgentBond from './ContextApi/Consumer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './ContextApi/provider';



function App() {
  return (
    <div> 
      Context API
      <Props name={'Anurag'} />
      <PropsDrill />
      <Provider>
      <AgentBond />
      </Provider>
    </div>
  )
}


export default App