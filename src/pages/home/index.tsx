import { Banner, Navbar } from '../../components';
import { HomePage } from '../../containers';

/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const Home = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <body>
        {/*Banner*/}
        <Banner/>
        <HomePage/>
      </body> 
    </>
  );
}
export default Home
