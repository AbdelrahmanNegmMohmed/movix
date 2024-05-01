import React from 'react';
import "./style.scss";

function ContentWrepper({children}) {
  return (
    <div className='contentWrapper'>
        {children}

    </div>
  )
}

export default ContentWrepper