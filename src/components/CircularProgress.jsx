const CircularProgress = ({ progress }) => {
  return (
    <div className="relative w-9 h-9">
      <div
        className="absolute inset-1 rounded-full"
        style={{
          background: `conic-gradient(#fbbf24 ${
            progress * 3.6
          }deg, #f5f5f5 0deg)`,
        }}
      ></div>

      <div className="absolute inset-2 bg-white dark:bg-[#030318] rounded-full"></div>
    </div>
  );
};

export default CircularProgress;
