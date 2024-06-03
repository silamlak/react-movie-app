import React, { useContext } from 'react'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';

import './tr.css'
const HorizontalScrollbar = ({data}) => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
        return (
        <p onclick={() => scrollPrev()} className="right-arrow">
        <h1 className='text-white text-5xl font-bold'>&lt;</h1>
        </p>
        );
        };

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
        return (
        <p onclick={() => scrollNext()} className="left-arrow">
            <h1 className='text-white text-5xl'>&gt;</h1>
        </p>
        )};
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className='scroll-container'>
        {data.map((item,i) => (
            <div
            key={item.id}
            itemID={item.id}
            title={item.id}
            className='text-white text-lg'
            >
               <BodyPar item = {item.title}/>
            </div>
        ))}
    </ScrollMenu>
  )
}

const BodyPar = ({item}) => {
    return (
        <div className='mt-[200px] w-[300px] text-white'>
            {item}
        </div>
)}

export default HorizontalScrollbar