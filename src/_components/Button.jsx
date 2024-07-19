// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ margin: '10px' }}>
      {children}
    </button>
  );
};

export default Button;