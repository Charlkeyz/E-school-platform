import React from 'react';

import './Reg.css';

const Reg = () => {
  return (
    <main>
        <div className='reg-container'>
            <div className='regForm-container'>
                <form action="" className='form'>
                    <div className='regForm-header'>
                        <div className='title'> Get Started!</div>
                    </div>
                    <br />

                    <label htmlFor="fullname">Full Name</label>
                    <div className='form-input'>
                        <input
                        type="text"
                        className="FullName"
                        placeholder='FullName'
                        // value={fullname}
                        // onChange={handleChange}
                        required
                        />
                    </div>

                    <label htmlFor="selectschool">School</label>
                    <div className='form-input'>
                        <input
                        type="text"
                        className="selectSchool" required
                        placeholder='Select School'
                        // value={selectSchool}
                        // onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="selectrole">Role</label>
                    <div className='form-input'>
                        <input
                        type="text"
                        className="selectRole" required
                        placeholder='Select Role'
                        // value={selectSchool}
                        // onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="email">Email</label>
                    <div className='form-input'>
                        <input
                        type="email"
                        className="username"
                        placeholder='Email'
                        // value={email}
                        // onChange={handleChange}
                        required
                        />
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className='form-input'>
                        <input
                        type="password"
                        className="password" required
                        placeholder='Password'
                        // value={password}
                        // onChange={handleChange}
                        />
                    </div>

                    <label htmlFor="confirmPassword">Password</label>
                    <div className='form-input'>
                        <input
                        type="password"
                        className="confirmPassword" required
                        placeholder='Confirm password'
                        // value={password}
                        // onChange={handleChange}
                        />
                    </div>
                </form>
                    <div className='action-btns'>
                        <button  className='act-btn-1'> Cancel</button>
                        <button  className='act-btn-2'> Create account</button>
                    </div>
                    <div>
                        <a className='acct-holder' href="#">Already have an account? Login</a>
                    </div>
                  

            </div>

				<div className='reg-image'>
					{/* <img src={frameImage} alt="" /> */}
				</div>
        </div>
    </main>
  );
}

export default Reg;
