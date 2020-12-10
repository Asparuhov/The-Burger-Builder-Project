import logo from './logo.svg';
import classes from './App.modules.css'
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder/>
        </Layout>
    </div>
  );
}

export default App;