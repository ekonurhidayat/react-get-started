import './App.css'
import Header from './components/layouts/Header'
import Router from './router/Router'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-full'>

      <div className='bg-gray-200 max-w-7xl mx-auto'>
        <Header />
        <Router />
      </div>
    </div>
  )
}

export default App
