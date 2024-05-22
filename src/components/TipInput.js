export default function TipInput({ children, tip, handleTip }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => handleTip(Number(e.target.value))}>
        {options.map((option, i) => (
          <option value={option.tip} key={i}>
            {option.text} ({option.tip}%)
          </option>
        ))}
      </select>
    </div>
  );
}

const options = [
  {
    text: 'Disaster',
    tip: 0,
  },
  {
    text: 'They tried...',
    tip: 5,
  },
  {
    text: 'It was good',
    tip: 10,
  },
  {
    text: 'Absolutely amazing!',
    tip: 20,
  },
];
