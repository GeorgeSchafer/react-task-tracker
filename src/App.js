import Header from './components/Header';
import { default as Tasks } from './components/Tasks'

const App = () => {
  return (
    <div className='container'>
        <Header />
        <Tasks />
    </div>
  )
};

export default App;
