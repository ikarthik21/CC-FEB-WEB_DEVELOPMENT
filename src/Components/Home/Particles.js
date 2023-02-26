import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {

  const options = useMemo(() => {
    return {

     
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },

          resize: true,
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {

        color: {
          value: "#ffffff",
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 2000,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,

    }
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);

  }, []);


  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
