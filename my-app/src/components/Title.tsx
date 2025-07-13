import React from 'react';

const Title = React.memo(() => {
  console.log('Title component');
  return <h2>useCallBackTest vol.1</h2>;
});

export default Title;
