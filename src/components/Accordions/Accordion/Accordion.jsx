import React from 'react';
import style from './accordion.module.css';

const Accordion = ({data=null, setActiveId, header,body, activeId}) => {
  return (
    <>
    {data ?
        <div className={`${style.Accordion}`} onClick={()=> setActiveId(data?.id)}>
            
            <div className={`${style.accordionHeader}  ${activeId===data?.id?style.accordionHeaderDark:null}`}>
                <h5>{data[header]}</h5>
            </div>
        {
            activeId===data?.id?
            <>
            <div className={style.accordionBody}>
                <p>{data[body]}</p>
            </div>
            </>:null
        }
        </div>
    :null}
    </>
  );
}

export default Accordion;
