const Title = ({ title, titleSpan }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{titleSpan}</span>
      </h2>
    </div>
  );
};
export default Title;
