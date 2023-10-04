import { Banner, Navbar } from '../../components';
import { ServicePage } from '../../containers';
/************************************* TYPING */ 
/************************************* VARIABLES */ 
/************************************* EXPORTS */ 
const Service = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <body>
        {/*Banner*/}
        <Banner/>
        <ServicePage/>
      </body> 
    </>
  );
}
export default Service;
