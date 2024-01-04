import bubbleBathGif from './assets/bubble-bath.gif'
import messyPig from './assets/messy-pig.webp'
import './App.css'

function App() {
  const getIsBathNight = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day % 2 !== 0
  }

  const isBathNight = getIsBathNight()

  return (
    <>
      <h1>Is it Bath Night?</h1>
      <div>
        <img src={isBathNight ? bubbleBathGif : messyPig} alt={isBathNight ? 'Bubble bath' : 'Messy pig'} />
      </div>
      {isBathNight ? (
        <h2 className="yes-heading">YES, it's bath night!!!!!</h2>
      ) : (
        <h2 className="no-heading">NO, it is not bath night.........</h2>
      )}
    </>
  )
}

export default App
