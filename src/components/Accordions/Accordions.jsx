import React, { useState } from 'react';
import {Accordion} from './Accordion';

import style from './accordions.module.css'

const Accordions = ({ data=[],header="header",body="body" }) => {
  const [activeId, setActveId] = useState(null)

  return (
    <div className={style.shoo} >
      {data.map((item, itemIndex) => (
        <Accordion data={item} key={itemIndex} header={header} body={body} activeId={activeId} setActiveId={setActveId} />
      ))}
    </div>
  );
}

export default Accordions;
