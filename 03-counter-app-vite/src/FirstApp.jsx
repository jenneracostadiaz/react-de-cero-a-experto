import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, nombre }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{nombre}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulos",
  // nombre: "Jenner Acosta",
};
