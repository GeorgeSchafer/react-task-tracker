import Header from './components/Header';
import { default as Tasks } from './components/Tasks'

const App = () => {
  return (
    <div className='container'>
        <Header title={1}/>
        <Tasks />
    </div>
  )
};

export default App;
