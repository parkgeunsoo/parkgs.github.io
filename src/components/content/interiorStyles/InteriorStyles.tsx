import React, {useState} from 'react';
import { Container } from 'react-bootstrap';

import Modern from './Modern';
import Natural from './Natural';
import Classic from './Classic';
import Unique from './Unique';

const InteriorStyles = () => {
   const [activeTab, setActiveTab] = useState(0);

    const tabs = [
    { id: 0, title: 'Modern', component: <Modern title="Modern" /> },
    { id: 1, title: 'Natural', component: <Natural title="Natural" /> },
    { id: 2, title: 'Classic', component: <Classic title="Classic" /> },
    { id: 3, title: 'Unique', component: <Unique  title="Unique" /> },
    ];
  return (
    <div className='interiorWrap'>
        <Container>
            <div className="tab-titles">
                {tabs.map((tab) => (
                    <button
                    key={tab.id}
                    className={`tab-title ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    >
                    {tab.title}
                    </button>
                ))}
            </div>
        </Container> 
        <div className="tab-content">
            {tabs[activeTab].component}
        </div>
             
    </div>
  );
};

export default InteriorStyles;