// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Tour = ({image, title, info, location}: any) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>
          {info}
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
        </div>
      </div>
    </article>
  );
};
