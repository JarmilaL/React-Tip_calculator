export default function BillInput({ price, handlePrice }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={price}
        onChange={(e) => handlePrice(Number(e.target.value))}
      />
    </div>
  );
}
