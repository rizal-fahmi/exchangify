// eslint-disable-next-line react/prop-types
const ErrorComponent = ({ message }) => {
  return (
    <div
      className="bg-white border-l-8 border-orange-300 text-orange-600 py-6 px-12"
      role="alert"
    >
      <p className="font-bold text-3xl pb-4">Warning!</p>
      <p className="text-2xl">{message}</p>
    </div>
  );
};

export default ErrorComponent;
