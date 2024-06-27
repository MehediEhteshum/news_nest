type LoaderCircleProps = {
  className?: string;
};

const LoaderCircle: React.FC<LoaderCircleProps> = ({ className }) => {
  return (
    <div
      className={`animate-spin rounded-full border-t-4 border-r-4 border-indigo-500 border-opacity-50 ${className}`}
    ></div>
  );
};

export default LoaderCircle;
