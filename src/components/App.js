import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./../styles/App.css";

import { fetchLorem } from "../actions/loremActions";

const App = props => {
  useEffect(() => {
    props.fetchLorem();
  }, []);

  if (props.loading) {
    return <p>Loading...</p>;
  }

  if (props.error) {
    return <p>{props.error}</p>;
  }

  return (
  <div>
    {props.data.map((item, index) => (
      <p key={index}>
        <strong>{item.title}</strong>
        <br />
        {item.body}
      </p>
    ))}
  </div>
);
};

const mapStateToProps = state => ({
  loading: state.loading,
  data: state.data,
  error: state.error
});

const mapDispatchToProps = {
  fetchLorem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);