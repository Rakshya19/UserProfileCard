import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCards } from '../actions/cardActions';

const Create = ({ history }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (name === '' || email === '' || address === '' || phone === '') {
      alert('Please enter all the fields');
    } else {
      const newUser = {
        name,
        email,
        image,
        address,
        phone,
        website,
      };

      dispatch(addCards(newUser));
      setName('');
      setEmail('');
      setImage('');
      setAddress('');
      setPhone('');
      setWebsite('');
      history.push('/');
    }
  };

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>Create Profile </h1>
        </div>
      </div>
      <div className='content-container'>
        <form className='form' onSubmit={submitHandler}>
          <input
            type='text'
            className='text-input'
            placeholder=' FullName'
            value={name || ""}
            onChange={e => setName(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='User Email'
            value={email || "" }
            onChange={e => setEmail(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Image URL'
            value={image || ""}
            onChange={e => setImage(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Full Address'
            value={address || ""}
            onChange={e => setAddress(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Phone Number'
            value={phone || ""}
            onChange={e => setPhone(e.target.value)}
          ></input>

          <input
            type='text'
            className='text-input'
            placeholder='Website'
            value={website || "" }
            onChange={e => setWebsite(e.target.value)}
          ></input>
          <button className='button__create' type='submit' variant='primary'>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
