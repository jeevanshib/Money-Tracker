import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
        <input type='text' placeholder={'+200 new items'}></input>
        <input type='datetime-local'></input>
        </div>
        <div className='description'>
        <input type='text' placeholder={'description'}></input>
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='discription'>It was time for new TV</div>
            </div>
            <div className='right'>
              <div className='price'>-$800.00</div>
              <div className='date'>2021-01-24 23:12:34</div>
            </div>
            </div>
            <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='discription'>It was time for new TV</div>
            </div>
            <div className='right'>
              <div className='price'>-$800.00</div>
              <div className='date'>2021-01-24 23:12:34</div>
            </div>
            </div>
            <div className='transaction'>
          <div className='left'>
            <div className='name'>New Samsung TV</div>
            <div className='discription'>It was time for new TV</div>
            </div>
            <div className='right'>
              <div className='price'>-$800.00</div>
              <div className='date'>2021-01-24 23:12:34</div>
            </div>
            </div>
      </div>
    </main>
  );
}

export default App;
