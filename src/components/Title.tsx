// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Title = ({ title, subTitle }: any) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};
