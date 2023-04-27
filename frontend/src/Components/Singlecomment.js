import React from 'react';

const Singlecomment = ({ comment }) => {
  const { person, comment: commentText, replies } = comment;

  return (
    <div className='shadow-2xl mt-4 border-2 border-gray-200 bg-gray-100'>
      <div className='flex mt-10 ms-20'>
        <img
          className='w-12 h-10'
          src='https://play-lh.googleusercontent.com/CKHLf6wwlacMnjuG730pY4cwJbUMoHDtFfoeVKuOxRmPwGXGkzzBfvB9jCJjBqhMSic=w240-h480-rw'
          alt=''
        />
        <h5 className='mt-3 font-bold ms-3'>{person}</h5>
      </div>

      <div style={{ marginLeft: '-740px' }}>{commentText}</div>

      <div style={{ marginLeft: '-640px' }} className='mt-3 mb-5'>
        {replies.length > 0 &&
          replies.map((reply) => (
            <Singlecomment key={reply.person} comment={reply} />
          ))}
      </div>
    </div>
  );
};

export default Singlecomment;
