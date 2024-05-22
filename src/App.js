import BillInput from './components/BillInput';
import Price from './components/Price';
import Reset from './components/Reset';
import TipInput from './components/TipInput';

export default function App() {
  return (
    <div className="App">
      <BillInput />
      <TipInput />
      <TipInput />
      <Price />
      <Reset />
    </div>
  );
}
