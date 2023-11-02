import React from 'react';
import Landing from '../../components/home/landing';
import Client from '../../components/home/client/client';
import Service from '../../components/home/service';
import Features from '../../components/home/features';
function Home() {
  return (
    <div>
      <Landing />
       <Client /> 
        <Service /> 
        {/* <Features /> */}
    </div>
  );
}

export default Home;
