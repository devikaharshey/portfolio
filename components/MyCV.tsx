import React from 'react'
import { MacbookScroll } from './ui/macbook-scroll';

const MyCV = () => {
  return (
    <div className="py-10 gap-y-3" id="myCV">
      <h1 className="heading">
        My <span className="text-purple">CV</span>
      </h1>
      <MacbookScroll src="/cv.png" />
    </div>
  );
}

export default MyCV