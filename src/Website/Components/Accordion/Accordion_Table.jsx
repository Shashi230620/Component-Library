import React, { useState } from 'react';
import "./Accordion.css"

const Accordion_Table = ({id_1,id_2,id_3,id_4,content_1,content_2,content_3,content_4}) => {
  const AccordionArray=[
    { id:id_1, 
        content: content_1 
    },
    { id: id_2, 
        content:content_2 
    },
    { id:id_3, 
        content:content_3 
    },
    { id: id_4, 
        content:content_4 
    }
]
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className='Functional_Accordion'>
      <div className='Functional_Div'>
    {AccordionArray.map((value, index) => (
        <div key={index} className='Accordion_Divv'>
          <div className='Btn_Toshow' onClick={() => handleToggle(index)}>
            <div className='Value_div'>
            {value.id}
            </div>
            <div className='Accordion_icon'>
              <img src='/assests/down-arrow.png'  id='img5'/>
            </div>
          </div>
          <div className="click">
            {activeIndex === index && <p>{value.content}</p>}
          </div>
        </div>
      ))}
      </div>
    </div>  
    </>
  );
};

export default Accordion_Table;
