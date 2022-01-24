import PropTypes from 'prop-types';

const mainStyling = {
  color: 'green',
  backgroundColor: 'black',
};

function Main({ mainText }) {
  return (
    <main>
      <div className="container" style={mainStyling}>
        <h3>This is the main component created as a test</h3>
        <h4>{mainText}</h4>
      </div>
    </main>
  );
}

Main.defaultProps = {
  mainText: 'Feedback UI',
};

Main.propTypes = {
  mainText: PropTypes.string.isRequired,
};
export default Main;
