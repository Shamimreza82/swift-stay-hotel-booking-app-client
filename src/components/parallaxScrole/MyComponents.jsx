import React from 'react';
import { Parallax, ParallaxLaye  } from '@react-spring/web';


const MyComponents = () => {
    return (
        <Parallax pages={1} style={{ top: '0', left: '0' }}>
          <ParallaxLaye offset={0} speed={2.5}>
            <p>Parallax</p>
          </ParallaxLaye>
        </Parallax>
      )
    
};

export default MyComponents;