"use client";

import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from './sketch';

const MagicSketch = () => {
    return (
        <div className="fixed left-0 -z-50">
            <ReactP5Wrapper sketch={sketch}/>
        </div>
    );
};

export default MagicSketch;