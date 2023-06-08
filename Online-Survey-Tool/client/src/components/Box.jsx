import PropTypes from "prop-types";

const Box = ({ children }) => {
  return <div className="bg-transparent">{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
