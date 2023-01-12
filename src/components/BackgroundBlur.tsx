interface Props {
  closePopup?: () => void;
  children: React.ReactNode;
}

const BackgroundBlur = ({ children, closePopup }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget && closePopup) {
      closePopup();
    }
  };

  return (
    <div onClick={handleClick} className="bg-blur">
      {children}
    </div>
  );
};


export default BackgroundBlur;
