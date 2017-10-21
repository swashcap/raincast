import { Link } from 'inferno-router'

const App = ({ children }) => (
  <div className='app'>
    <header role='banner'>
      <nav role='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
  </div>
)

export default App
