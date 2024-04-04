import React from 'react';
import { useDrag, useDrop} from 'react-dnd';

interface BoxProps {
    id?: string;
    left?: number;
    top?: number;
    children?: React.ReactNode;
}

const FrameFix: React.FC<BoxProps> = ({ id, left, top, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} style={{ position: 'absolute', left, top }}>
      {children}
    </div>
  );
};

export default FrameFix;