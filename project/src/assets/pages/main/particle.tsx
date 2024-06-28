import React, { useEffect, useRef } from "react";

interface Particle {
  key: number;  
  radius: number;
  xPos: number;
  yPos: number;
  xVelocity: number;
  yVelocity: number;
  color: string;
}

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let animationFrameId: number | null = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = ['255, 255, 255', '49, 154, 255', '233, 96, 255'];
    const blurry = true;
    const border = false;
    const minRadius = 1;
    const maxRadius = 1;
    const minOpacity = 0.1;
    const maxOpacity = 1;
    const minSpeed = 0.05;
    const maxSpeed = 0.5;
    const numParticles = 55;

    const rand = (min: number, max: number): number => Math.random() * (max - min) + min;

    const draw = (particle: Particle[], i: number) => {
        if (!ctx) return;
      
        if (blurry) {
          const grd = ctx.createRadialGradient(
            particle[i].xPos,
            particle[i].yPos,
            particle[i].radius,
            particle[i].xPos,
            particle[i].yPos,
            particle[i].radius / 1.25
          );
      
          grd.addColorStop(1.0, particle[i].color);
          grd.addColorStop(0.0, 'rgba(34, 34, 34, 0)');
          ctx.fillStyle = grd;
        } else {
          ctx.fillStyle = particle[i].color;
        }
      
        if (border) {
          ctx.strokeStyle = '#fff';
          ctx.stroke();
        }
      
        ctx.beginPath();
        ctx.arc(
          particle[i].xPos,
          particle[i].yPos,
          particle[i].radius,
          0,
          2 * Math.PI,
          false
        );
        ctx.shadowColor = 'rgba(8, 8, 8, 0.2)';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 1;
        ctx.shadowBlur = 2;
        ctx.fill();
      };

      const animate = (particle: Particle[]) => {
        animationFrameId = requestAnimationFrame(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      
          for (let i = 0; i < numParticles; i++) {
            particle[i].xPos += particle[i].xVelocity;
            particle[i].yPos -= particle[i].yVelocity;
      
            if (
              particle[i].xPos > canvas.width + particle[i].radius ||
              particle[i].yPos > canvas.height + particle[i].radius
            ) {
              resetParticle(particle, i);
            } else {
              draw(particle, i);
            }
          }
          
          animate(particle);
        });
      };

    const resetParticle = (particle: Particle[], i: number) => {
        const random = rand(0, 1);
      
        if (random > 0.5) {
          particle[i].xPos = -particle[i].radius;
          particle[i].yPos = rand(0, canvasRef.current!.height);
        } else {
          particle[i].xPos = rand(0, canvasRef.current!.width);
          particle[i].yPos = canvasRef.current!.height + particle[i].radius;
        }
      
        particle[i].xVelocity = rand(minSpeed, maxSpeed);
        particle[i].yVelocity = rand(minSpeed, maxSpeed);
      
        draw(particle, i);
    };

    const createCircle = () => {
      const particles: Particle[] = [];

      for (let i = 0; i < numParticles; i++) {
        const color = colors[~~rand(0, colors.length)];

        particles[i] = {
          key: i,
          radius: rand(minRadius, maxRadius),
          xPos: rand(0, canvas.width),
          yPos: rand(0, canvas.height),
          xVelocity: rand(minSpeed, maxSpeed),
          yVelocity: rand(minSpeed, maxSpeed),
          color: `rgba(${color}, ${rand(minOpacity, maxOpacity)})`,
        };

        draw(particles, i);
      }

      animate(particles);
    };

    const render = () => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;
    };


    render();
    createCircle();

    return () => {
      cancelAnimationFrame(animationFrameId!);
    };
  }, []);

  return <canvas ref={canvasRef} style=
  {{
    position : 'absolute',
    width : "100%",
    height : "100%",
    top : 0,
    left : 0,
  }}/>;
};

export default Particles;