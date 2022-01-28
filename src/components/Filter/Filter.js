import React from 'react';

export const Filter = ({ filter, onFindName }) => {
  return (
    <>
      <label>
        Find news by title
        <input
          placeholder="news title"
          type="text"
          name="filter"
          value={filter}
          onChange={onFindName}
        />
      </label>
    </>
  );
};
