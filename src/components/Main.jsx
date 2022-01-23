import PropTypes from 'prop-types';

function Main({ mainText }) {
  return (
    <main>
      <div className="container">
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
