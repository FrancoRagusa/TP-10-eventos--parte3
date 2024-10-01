// pages/login.js
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;