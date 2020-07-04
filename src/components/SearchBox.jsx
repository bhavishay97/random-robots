import React from 'react';

const SearchBox = ({ searchChange }) => {
  const inputStyles = {
    background: '#cdecff',
  };

  return (
    <div className='row'>
      <div className='col-8 offset-2 col-md-6 offset-md-3'>
        <form>
          <div className='form-group'>
            <input
              className='form-control form-control-lg'
              style={inputStyles}
              type='search'
              placeholder='search robots...'
              onChange={searchChange}
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
