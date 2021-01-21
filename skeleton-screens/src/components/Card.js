import React from 'react';
import SkeletonRow from './SkeletonRow';

const Card = ({ title, subtitle, content }) => {
  return (
    <div className="Card">
      <h1>{title ? title : <SkeletonRow />}</h1>
      <h2>{subtitle ? subtitle : <SkeletonRow />}</h2>
      <p>{content ? content : <SkeletonRow />}</p>
    </div>
  );
};

export default Card;
