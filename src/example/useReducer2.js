import React, { useReducer, useState } from 'react';
const initialState = {
    username: '',
    password: ''
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'change':
        return { ...state, [action.field]: action.value };
      default:
        throw new Error();
    }
  }
  
  function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    function handleChange(e) {
      const { name, value } = e.target;
      dispatch({ type: 'change', field: name, value });
    }
  
    return (
      <form>
        <input type="text" name="username" value={state.username} onChange={handleChange} />
        <input type="password" name="password" value={state.password} onChange={handleChange} />
      </form>
    );
  }
  
  export default Form;