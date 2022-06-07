export const LogoPartners = (props) => {
  const { logos, className } = props;
  return (
    <div className="brand-list">
      {logos.map((elem) => (
        <a key={elem._id} href={elem.href} className="">
          <img
            src={elem.src}
            alt={elem.alt}
            className={className}
            {...props}
          ></img>
        </a>
      ))}
    </div>
  );
};

export default LogoPartners;
