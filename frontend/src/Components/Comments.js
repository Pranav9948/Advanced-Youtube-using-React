import React from 'react';
import Singlecomment from './Singlecomment';
import { commentData } from '../utils/commentData';

const Comments = () => {
  return (
    <div>
      {commentData.map((comment) => (
        <Singlecomment key={comment.person} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;








