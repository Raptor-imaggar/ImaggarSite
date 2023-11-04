import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './PeepCrowd.module.css';

const PeepCrowd = () => {
  const config = {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png',
    rows: 15,
    cols: 7,
  };

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const allPeeps = useRef([]);
  const availablePeeps = useRef([]);
  const crowd = useRef([]);

  useEffect(() => {
    const img = new Image();

    img.onload = init;
    img.src = config.src;

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function init() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    createPeeps();
    resize();

    gsap.ticker.add(render);
  }

  function createPeeps() {
    const img = new Image();
    img.src = config.src;
    img.onload = () => {
      const { rows, cols } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.current.push(new Peep({
          image: img,
          rect: [
            (i % rows) * rectWidth,
            (i / rows | 0) * rectHeight,
            rectWidth,
            rectHeight,
          ],
        }));
      }
    };
  }

  function resize() {
    const canvas = canvasRef.current;
    const stage = {
      width: canvas.clientWidth,
      height: canvas.clientHeight,
    };

    const ctx = ctxRef.current;
    canvas.width = stage.width * devicePixelRatio;
    canvas.height = stage.height * devicePixelRatio;

    crowd.current.forEach((peep) => {
      peep.walk.kill();
    });

    crowd.current.length = 0;
    availablePeeps.current.length = 0;
    availablePeeps.current.push(...allPeeps.current);

    initCrowd();
  }

  const Peep = class {
    constructor({ image, rect }) {
      this.image = image;
      this.setRect(rect);

      this.x = 0;
      this.y = 0;
      this.anchorY = 0;
      this.scaleX = 1;
      this.walk = null;
    }

    setRect(rect) {
      this.rect = rect;
      this.width = rect[2];
      this.height = rect[3];

      this.drawArgs = [
        this.image,
        ...rect,
        0,
        0,
        this.width,
        this.height,
      ];
    }

    render(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.scale(this.scaleX, 1);
      ctx.drawImage(...this.drawArgs);
      ctx.restore();
    }
  };

  function normalWalk({ peep, props }) {
    const { startX, startY, endX } = props;

    const xDuration = 10;
    const yDuration = 0.25;

    const tl = gsap.timeline();
    tl.timeScale(randomRange(0.5, 1.5));
    tl.to(peep, {
      duration: xDuration,
      x: endX,
      ease: 'none',
    }, 0);
    tl.to(peep, {
      duration: yDuration,
      repeat: xDuration / yDuration,
      yoyo: true,
      y: startY - 10,
    }, 0);

    return tl;
  }

  const walks = [normalWalk];

  function resetPeep({ stage, peep }) {
    const direction = Math.random() > 0.5 ? 1 : -1;
    // using an ease function to skew random to lower values to help hide that peeps have no legs
    const offsetY = 100 - 250 * gsap.parseEase('power2.in')(Math.random());
    const startY = stage.height - peep.height + offsetY;
    let startX;
    let endX;

    if (direction === 1) {
      startX = -peep.width;
      endX = stage.width;
      peep.scaleX = 1;
    } else {
      startX = stage.width + peep.width;
      endX = 0;
      peep.scaleX = -1;
    }

    peep.x = startX;
    peep.y = startY;
    peep.anchorY = startY;

    return {
      startX,
      startY,
      endX,
    };
  }

  function initCrowd() {
    while (availablePeeps.current.length) {
      // setting random tween progress spreads the peeps out
      addPeepToCrowd().walk.progress(Math.random());
    }
  }

  function addPeepToCrowd() {
    const peep = removeRandomFromArray(availablePeeps.current);
    const walk = getRandomFromArray(walks)({
      peep,
      props: resetPeep({
        peep,
        stage: {
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        },
      }),
    }).eventCallback('onComplete', () => {
      removePeepFromCrowd(peep);
      addPeepToCrowd();
    });

    peep.walk = walk;

    crowd.current.push(peep);
    crowd.current.sort((a, b) => a.anchorY - b.anchorY);

    return peep;
  }

  function removePeepFromCrowd(peep) {
    removeItemFromArray(crowd.current, peep);
    availablePeeps.current.push(peep);
  }

  function render() {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    canvas.width = canvas.width;
    ctx.save();
    ctx.scale(devicePixelRatio, devicePixelRatio);

    crowd.current.forEach((peep) => {
      peep.render(ctx);
    });

    ctx.restore();
  }

  // UTILS

  function randomRange(min, max) {
    return min + Math.random() * (max - min);
  }

  function randomIndex(array) {
    return randomRange(0, array.length) | 0;
  }

  function removeFromArray(array, i) {
    return array.splice(i, 1)[0];
  }

  function removeItemFromArray(array, item) {
    return removeFromArray(array, array.indexOf(item));
  }

  function removeRandomFromArray(array) {
    return removeFromArray(array, randomIndex(array));
  }

  function getRandomFromArray(array) {
    return array[randomIndex(array) | 0];
  }

  return (
    <canvas ref={canvasRef} id="canvas" />
  );
};

export default PeepCrowd;
