import './App.css';
import Feed from './Components/Feed';
import Post from './Components/Post';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';

function App() {
  return (
<div className='app'>
<Sidebar />
<Feed />
<Widgets />

</div>
  )
}

export default App;
