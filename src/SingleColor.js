const SingleColor = ({ rgb, weight, index, hex, setSuccess }) => {
  const rgbValue = rgb.join(",");
  const hexValue = `#${hex}`;

  const handleClick = () => {
    setSuccess(true);
    navigator.clipboard.writeText(hexValue);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbValue})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
