import React, { memo } from 'react';

type Props = {};

function Child1({}: Props) {
  console.log('Child 1 render');

  return <div>Child1</div>;
}

export default memo(Child1);
