const ActiveIcon = ({ icon, activeIcon, active, size = 44, className }) => {
  return (
    <div
      style={{ height: `${size}px`, aspectRatio: 1 }}
      className={`${className}`}
    >
      {active ? activeIcon : icon}
    </div>
  );
};

export default ActiveIcon;
