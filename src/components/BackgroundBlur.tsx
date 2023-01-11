interface Props {
  closePopup?: () => void;
  children: React.ReactNode;
}

const BackgroundBlur = ({ children, closePopup }: Props) => {
  
  return (
    <div onClick={closePopup} className="bg-blur">
      {children}
    </div>
  );
};

export default BackgroundBlur;