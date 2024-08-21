import React, { useState } from 'react';

const ExerciseCard = (props) => {
  const { exercise, id } = props;
  const [setsCompleted, setSetsCompleted] = useState(0);

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  return (
    <div className='p-4 rounded-md flex flex-col bg-slate-950'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-x-4 mb-4'>
        <h4 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>
          {String(id + 1).padStart(2, '0')}
        </h4>
        <h2 className='capitalize truncate text-lg sm:text-xl md:text-2xl flex-1 text-slate-200 text-center sm:text-left'>
          {exercise.name.replaceAll('_', ' ')}
        </h2>
        <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
        <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
      </div>
      <div className='flex flex-col bg-slate-800 rounded p-2 gap-2 mb-4'>
        {exercise.description.split('__').map((val, index) => (
          <div key={index} className='text-sm text-slate-300'>
            {val}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
        {['reps', 'rest', 'tempo'].map((info, index) => (
          <div
            key={index}
            className='flex flex-col p-2 rounded border border-solid border-slate-900 bg-slate-800 text-center'
          >
            <h3 className='text-slate-400 text-sm capitalize'>
              {info === 'reps' ? `${exercise.unit}` : info}
            </h3>
            <p className='font-medium text-slate-100'>
              {exercise[info]}
            </p>
          </div>
        ))}
        <button
          onClick={handleSetIncrement}
          className='flex flex-col p-2 rounded border border-solid border-blue-900 bg-blue-800 text-center hover:border-blue-600 duration-200'
        >
          <h3 className='text-slate-400 text-sm capitalize'>Sets Completed</h3>
          <p className='font-medium text-slate-100'>
            {setsCompleted} / 5
          </p>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
