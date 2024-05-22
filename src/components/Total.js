export default function Total({ price, tip }) {
  return (
    <div>
      <h3>
        You pay ${price + tip} (${price} + ${tip} tip)
      </h3>
    </div>
  );
}
