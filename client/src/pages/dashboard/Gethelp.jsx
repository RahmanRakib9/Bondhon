import React from 'react';
import Sidebar from '../../components/Sidebar';
import data from '../../../data';
import ProductCard from '../../components/ProductCard';
import WeatherAlert from '../../components/Weatheralert';

function Gethelp() {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      <div>
        <Sidebar />
      </div>

      <div>
        <WeatherAlert/>
      </div>
    </div>
  );
}

export default Gethelp;
