import React from 'react';
import Landing from '../../components/home/landing';
import Client from '../../components/home/client/client';
import Service from '../../components/home/service';
import Testimonial from '../../components/home/testimonials';
import Counter from '../../components/home/counter';
import ContactBar from '../../components/home/ContactBar';
function Home() {
  return (
    <div>
      <Landing />
       <Client /> 
        <Service /> 
        <Counter />
       

        <Testimonial />
        <ContactBar />
    </div>
  );
}

export default Home;
