import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';




function Nav({ isAuth, setIsAuth}) {
const navigate = useNavigate();

// Sign in with Google using signInWithPopup from firebase
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/notes');
    });
  };


// Sign out with signOut from firebase
  const signUserOut = async () => {
    await signOut(auth).then(() => {
      localStorage.removeItem('isAuth');
      setIsAuth(false);
      navigate('/');
    });
  };

// persistent login on page load

useEffect(() => {
 let isLoggedIn = localStorage.getItem('isAuth')
 setIsAuth(isLoggedIn)
}, [setIsAuth])




  return (
    <nav>
      <ul>
        {!isAuth ? (
          <li>
            <Link to="/">Home</Link>
          </li>
        ) : (
          <li>
            {isAuth ? <Link to="/notes">Notes</Link> : <Link to="/">Home</Link>}
          </li>
        )}
        
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {!isAuth ? (
        <button onClick={signInWithGoogle} className="login-with-google-btn">
          Login
        </button>
      ) : (
        <button onClick={signUserOut}>Logout</button>
      )}
    </nav>
  );
}

export default Nav;
