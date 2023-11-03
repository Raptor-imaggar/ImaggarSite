import React from 'react';
import Landing from '../../components/home/landing';
import Client from '../../components/home/client/client';
import Service from '../../components/home/service';
import Counter from '../../components/home/testimonials';
import Testimonial from '../../components/home/counter';
function Home() {
  return (
    <div>
      <Landing />
       <Client /> 
        <Service /> 
        <Testimonial />
        <Counter />
    </div>
  );
}

export default Home;
