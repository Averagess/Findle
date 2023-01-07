interface Props {
  children: React.ReactNode;
}

const BackgroundBlur = ({ children }: Props) => {
  return (
    <div className="bg-blur">
      {children}
    </div>
  );
};

export default BackgroundBlur;