export default function TipInput({ children }) {
  return (
    <div>
      <span>{children}</span>
      <select>
        <option>Disaster (0%)</option>
        <option>They tried... (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
