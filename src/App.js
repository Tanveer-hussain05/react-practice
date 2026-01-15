import Props from './components/props'
import Prop1 from './components/prop1';
function App() {
  let firstName = "Tanveer";
  let lastName = "Hussain";
  let email = "something@gmail.com";

  return (
    <div>
      <Props firstName={firstName} lastName={lastName} email={email}/>
      <Prop1 firstName="Naeem" lastName="raza" email="everything@gmail.com"/>
    </div>
  )
}

export default App
