import React from 'react';
import './Filter.scss'

export const Filter = ({ filter, onFindName }) => {
  return (
    <div className='filter'>
      <label className='filter__label'>
        <span className='filter__label-text'>Find news by title</span>
        <input
        className='filter__input'
          placeholder="news title"
          type="text"
          name="filter"
          value={filter}
          onChange={onFindName}
        />
      </label>
    </div>
  );
};
