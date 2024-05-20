import React from 'react';


// import projectStyles from '.style.module.css'
import style from  './Login.module.css';

//button icons
import googleIcon from './Login-assets/google-svgrepo-com.svg';
import fbIcon from './Login-assets/facebook-svgrepo-com.svg';
import linkedinIcon from './Login-assets/linkedin-svgrepo-com.svg';
import frameImage from './Login-assets/login-1.png';

const Login = () => {
  return (
	<main className={style.main}>
		<div className={style.loginContainer}>

			<div className={style.formContainer}>
				<form className={style.form}>
					<div className={style.form_header}>
						<div className={style.title}>Welcome Back!</div>
						<div className={style.subTitle}>To continue, kindly supply your credentials</div>
					</div>
					<br />
					<label htmlFor="email" className={style.label1}>Email</label>
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

					<label htmlFor="password" className={style.label}>Password</label>
					<div className={style.formInput}>
						<input
						type="password"
						className="password" required
						placeholder='password'
						// value={password}
						// onChange={handleChange}
						/>
					</div>
	
						<div className={style.loginButton}>
							<button  className={style.ctaLogin}> Login</button>
						</div>
						<a className={style.forgotPasswd} href="#">forgot your password? click here</a>
						<div className={style.loginType}>
							<button className={style.Google}><img src={googleIcon} alt="google" />Google</button>
							<button className={style.Facebook}><img src={fbIcon} alt="facebook" />Facebook</button>
							<button className={style.Linkedin}><img src={linkedinIcon} alt="linkedin" />Linkedin</button>
						</div>

						<div className={style.createAccount}>
							<button className={style.CreateAccount}>Create an account</button>
						</div>
					
				</form>

			</div>

			<div className={style.loginImage}>
				<img src={frameImage} alt="" />
			</div>
		

		</div>
	</main>
  );
}

export default Login;
