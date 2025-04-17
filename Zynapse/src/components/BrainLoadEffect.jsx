import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../style/brainEffect.css";

const BrainLoadEffect = (props) => {
  const [particleCount, setParticleCount] = useState(150);
  const [clickCount, setClickCount] = useState(0);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });

    const handleTouchEnd = () => {
      setInit(true);
    };

    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    const handlePageClick = () => {
      setClickCount((prevCount) => {
        if (prevCount < 1) {
          setParticleCount((prev) => prev + 50);
          return prevCount + 1;
        }
        return prevCount;
      });
    };

    window.addEventListener("click", handlePageClick);

    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        color: {
          value: "#ff3503",
        },
        links: {
          color: "#ff3503",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: particleCount,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [particleCount]
  );

  return (
    <Particles className="bgeffect" init={particlesLoaded} options={options} />
  );
};

export default BrainLoadEffect;
