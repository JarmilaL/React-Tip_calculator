import BillInput from './components/BillInput';
import Total from './components/Total';
import Reset from './components/Reset';
import TipInput from './components/TipInput';
import { useState } from 'react';

export default function App() {
  const [price, setPrice] = useState(0);
  const [tip, setTip] = useState(0);

  function handlePrice(input) {
    setPrice(input);
  }

  function handleTip(input) {
    console.log(input);

    setTip((tip) => tip + Number(input));
  }

  return (
    <div className="App">
      <BillInput handlePrice={handlePrice} />
      <TipInput handleTip={handleTip}>How did you like the service?</TipInput>
      <TipInput handleTip={handleTip}>
        How did your friend like the service?
      </TipInput>
      <Total price={price} tip={tip} />
      <Reset />
    </div>
  );
}
