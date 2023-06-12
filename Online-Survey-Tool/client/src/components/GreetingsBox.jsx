const GreetingsBox = () => {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening";
  }
  return (
    <div className="m-10">
      <h3 className="font-semibold text-[2rem] tracking-tight text-[#A9A9A9] py-3">
        {greeting}
      </h3>
      <h2 className="font-bold  text-[3rem] text-[#422A21]">Steve Hudson</h2>
    </div>
  );
};

export default GreetingsBox;
