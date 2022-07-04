import PropTypes from "prop-types";
const newMessage = {
  message: "Hola Mundo",
  title: "Jenner",
};

const suma = (a, b) => a + b;

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
  subTitle: PropTypes.number,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: 0,
  nombre: "Jenner Acosta",
};
