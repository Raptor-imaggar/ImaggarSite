import React from 'react';
import Landing from '../../components/home/landing';
import Client from '../../components/home/client/client';
import Service from '../../components/home/service';
import Testimonial from '../../components/home/testimonials';
function Home() {
  return (
    <div>
      <Landing />
       <Client /> 
        <Service /> 
        <Testimonial />
    </div>
  );
}

export default Home;
