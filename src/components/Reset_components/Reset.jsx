import React from 'react';

import style from './Reset.module.css';
import resetImage from './reset.svg';

const Reset = () => {
  return (
   
      <main>
        <div className={style.loginContainer}>
        <div className={style.loginImage}>
            <img src={resetImage} alt="" />
          </div>
        
    
          <div className={style.formContainer}>
            <form className={style.form}>
              <div className={style.form_header}>
                <div className={style.title}>Welcome Back!</div>
                <div className={style.subTitle}>To continue, kindly supply your credentials</div>
              </div>
              <br />
              <label htmlFor="email">Email</label>
              <div className={style.formInput}>
                <input
                type="email"
                className="username"
                placeholder='email/username'
                // value={email}
                // onChange={handleChange}
                required
                />
              </div>
    
              <label htmlFor="password">Secret Question</label>
              <div className={style.formInput}>
                <input
                type="password"
                className="password" required
                placeholder='password'
                // value={password}
                // onChange={handleChange}
                />
              </div>
              
              <label htmlFor="password">Secret Question Answer</label>
              <div className={style.formInput}>
                <input
                type="text"
                className="answerText" required
                placeholder='password'
                // value={password}
                // onChange={handleChange}
                />
              </div>
      
                <div className={style.loginButton}>
                  <button  className={style.ctaLogin}> Cancel</button>
                  <button  className={style.ctaLogin}> Reset</button>
                </div>
                  
        
              
            </form>
    
          </div>
    
         
    
        </div>
      </main>
     
  );
}

export default Reset;
