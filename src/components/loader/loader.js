import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Loader = ({ loading }) => {
  return loading && <div>Loading...</div>;
};

const mapStateToProps = ({ loading }) => ({
  loading
});
export default connect(mapStateToProps)(Loader);
