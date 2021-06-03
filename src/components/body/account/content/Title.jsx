import React from 'react';
import '../../../../scss/titleBody.scss'


function Title({title}) {

  return (
    <div className="titleBody">
      <span>{title}</span>
    </div>
  );
}

export default Title;
