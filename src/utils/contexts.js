import React from 'react';

const forceUpdateContext = React.createContext({
  forceUpdate: false,
  doForceUpdate: () => {}
});

export default forceUpdateContext;