const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>There are no items!</h3>}</>;
};

export default ErrorMessage;
