import { useState } from 'react';
import './App.css';
import { RevenueCard } from './components/RevenueCard';
import { RevenueCard1 } from './components/bluecard';
import { Mainbar } from './components/navbar';
import { Overview } from './components/Overview';
import { Transactions } from './components/Transactionsblock';
import { TransferHistory } from './components/TransactionHistory';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return ( <div className='flex  w-100 h-100'>
  <div className='w-1/6 '>
    <Sidebar/>
  </div>
  <div className=' relative h-screen overflow-y-scroll overflow-hidden'>
<div><Mainbar/></div>

<div className='bg-slate-100 p-5 '>
<Overview/>
<div className='grid grid-cols-3   '>
  <RevenueCard1  title={"Next Payout"} amount={" 2,312.23"} orderCount={23}/>
<RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
<RevenueCard title={"Amount pending"} amount={"23,92,312.19"}  />

</div> 
<Transactions/>

<TransferHistory/>

</div>
<Footer/>
 
</div>
</div>
  );
}

export default App;
