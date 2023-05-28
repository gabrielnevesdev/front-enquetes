import PropTypes from 'prop-types';
import "./background.css";

function Background({ children }) {
  return <div className="background">{children}</div>;
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
