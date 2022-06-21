import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './reduces';

class App extends Component {
  render () {
  const { isFetching, src, fetchDog } = this.props;
    return isFetching ? (
      <p>Loading...</p>
    ) : (
      <div style={{ width: 500, display: 'flex', flexDirection: 'column' }}>
        <button style={{ display: "block" }} onClick={fetchDog} type="button">
          Novo Doguinho
        </button>
        <img style={{ width: "100%" }} src={src} alt="dog" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog('teste')),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
