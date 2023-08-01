import './App.css';
import Expenses from './components/Expenses';
function App() {

  const expenses = [
    { id:'a1', title: '앱개발비', amount: 600, date: new Date(2023, 7, 31), },
    { id:'a2', title: '앱유지보수비', amount: 20, date: new Date(2023, 8, 31), },
    { id:'a3', title: '서버호스팅비', amount: 30, date: new Date(2023, 9, 31), },
  ]

  return (
    <div className='wrapper'>
      <h2>생활 지출 내역서</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;
