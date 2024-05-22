import BillInput from './components/BillInput';
import Total from './components/Total';
import Reset from './components/Reset';
import TipInput from './components/TipInput';
import { useState } from 'react';

export default function App() {
  const [price, setPrice] = useState(0);

  function handlePrice(input) {
    setPrice(input);
  }

  return (
    <div className="App">
      <BillInput handlePrice={handlePrice} />
      <TipInput>How did you like the service?</TipInput>
      <TipInput>How did your friend like the service?</TipInput>
      <Total price={price} />
      <Reset />
    </div>
  );
}
