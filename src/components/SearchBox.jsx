import React from 'react';

const SearchBox = () => {
  const inputStyles = {
    background: '#cdecff',
  };

  return (
    <div className='col-8 offset-2 col-md-6 offset-md-3'>
      <form>
        <div className='form-group'>
          <input
            className='form-control form-control-lg'
            style={inputStyles}
            type='search'
            placeholder='search robots...'
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
