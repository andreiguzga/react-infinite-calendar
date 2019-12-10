import React from 'react';

var forceUpdateContext = React.createContext({
  forceUpdate: false,
  doForceUpdate: function doForceUpdate() {}
});

export default forceUpdateContext;