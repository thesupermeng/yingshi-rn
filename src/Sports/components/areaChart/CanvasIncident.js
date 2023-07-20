import React from 'react';
import {StyleSheet} from 'react-native';
import Canvas, {Path2D} from 'react-native-canvas';

const Color = {
  home: '#FFA100',
  away: '#07C160',
};
export const CanvasIncident = React.memo(({data = [], height, width}) => {
  const canvasWidth = (data.length - 1) * 5;

  const createPath = canvas => {
    const path = new Path2D(canvas);
    path.moveTo(0, 100);
    data.forEach((pos, idx) => {
      path.lineTo(idx * 5, 100 - pos);
    });
    path.lineTo(canvasWidth, 100);
    return path;
  };

  const handleCanvas = canvas => {
    if (!canvas) {
      return <></>;
    }
    canvas.height = 200;
    canvas.width = canvasWidth;

    const ctx = canvas.getContext('2d');
    ctx.scale(width / canvasWidth, height / 200);
    const path = createPath(canvas);

    ctx.fillStyle = Color.home;
    ctx.fill(path);

    const clipAway = new Path2D(canvas);
    clipAway.rect(0, 100, canvasWidth, 200);
    ctx.clip(clipAway, 'nonzero');
    ctx.fillStyle = Color.away;
    ctx.fill(path);
  };
  return (
    <>
      <Canvas
        ref={handleCanvas}
        style={[
          style,
          {
            width: width,
            height: height,
          },
        ]}
      />
    </>
  );
});

const style = StyleSheet.create({
  ...StyleSheet.absoluteFillObject,
});
