const Exponent = ({ num, exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n<sup>{exponent}</sup></p>
    <p className="exponent-result">{num} {Array.from({ length: exponent - 1 }).map(() => ` * ${num}`)} = <span className="total">{Math.pow(num, exponent)}</span></p>
  </div>
);

export default Exponent;