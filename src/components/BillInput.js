export default function BillInput({ handlePrice }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="text" onChange={(e) => handlePrice(e.target.value)} />
    </div>
  );
}
