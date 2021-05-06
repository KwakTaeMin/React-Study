import classNames from 'classnames';
import React from 'react';

export default function Tile({id, x, y, value, isMerged, isNew}) {
  return (
    <div 
      key={id} 
      className={classNames(`tile tile-${value} tile-position-${x}-${y} tile-new`, {
        'tile-merged' : isMerged,
        'tile-new' : isNew,
      })}
    >
      <div className="tile-inner">{value}</div>
    </div>
  );
}
