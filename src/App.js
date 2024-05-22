import BillInput from './components/BillInput';
import Total from './components/Total';
import Reset from './components/Reset';
import TipInput from './components/TipInput';
import { useState } from 'react';

export default function App() {
  const [price, setPrice] = useState(0);
  const [tipOne, setTipOne] = useState(0);
  const [tipTwo, setTipTwo] = useState(0);

  const totalTip = price * ((tipOne + tipTwo) / 2 / 100);

  function handleReset() {
    setPrice(0);
    setTipOne(0);
    setTipTwo(0);
  }

  return (
    <div className="App">
      <BillInput price={price} handlePrice={setPrice} />
      <TipInput tip={tipOne} handleTip={setTipOne}>
        How did you like the service?
      </TipInput>
      <TipInput tip={tipTwo} handleTip={setTipTwo}>
        How did your friend like the service?
      </TipInput>
      <Total price={price} tip={totalTip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}
