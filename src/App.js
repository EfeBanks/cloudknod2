import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Navbar from './Components/navbar/Navbar';
//import NavigationBar from './Components/navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigationBar2 from './Components/navbar2/Navbar2';
import Home from './Pages/home/Home';
import TechStack from './Pages/tech-stack/TechStack';
import Services from './Pages/services/Services';
import Industries from './Pages/industries/Industries';
import Contact from './Pages/contact/Contact';
import About from './Pages/about/About';
import Footer from './Components/footer/Footer';

//
import FrontendWeb from './Pages/tech-stack/FrontendWeb';
import BackendWeb from './Pages/tech-stack/BackendWeb';
import MobileApp from './Pages/tech-stack/MobileApp';
import Android from './Pages/tech-stack/android/Android';
import Angular from './Pages/tech-stack/angular/Angular';
import Ios from './Pages/tech-stack/ios/Ios';
import Java from './Pages/tech-stack/java/Java';
import JSReact from './Pages/tech-stack/react/React';
import Net from './Pages/tech-stack/net/Net';
import Php from './Pages/tech-stack/php/Php';
import Python from './Pages/tech-stack/python/Python';
import ReactNative from './Pages/tech-stack/reactNative/ReactNative';
import Vue from './Pages/tech-stack/vue/Vue';
//
import Healthcare from './Pages/industries/healthcare/Healthcare';
import Finance from './Pages/industries/finance/Finance';
import Logistics from './Pages/industries/logistics/Logistics';
import Telecom from './Pages/industries/telecom/Telecom';
import Automotive from './Pages/industries/automotive/Automotive';
import Media from './Pages/industries/media/Media';
//
import WebDevelopment from './Pages/services/webDevelopment/WebDevelopment';
import MobileAppDevelopment from './Pages/services/mobileAppDev/MobileAppDevelopment';
import CrossPlatform from './Pages/services/crossPlatform/CrossPlatform';
import CustomSoftware from './Pages/services/customSoftware/CustomSoftware';
import QualityAssurance from './Pages/services/qualityAssurance/QualityAssurance';
import BusinessAnalysis from './Pages/services/business/BusinessAnalysis';
import UiUxDesign from './Pages/services/uiuxDesign/UiUxDesign';
import SolutionArchitecture from './Pages/services/solution/SolutionArchitecture';
import ProjectManagement from './Pages/services/pmp/ProjectManagement';
import ITSecurity from './Pages/services/itSecurity/ITSecurity';
import Devops from './Pages/services/devops/Devops';
import CloudDevelopment from './Pages/services/cloudDev/CloudDevelopment';





function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar2 />
        <Routes>
          <Route path ='/' element = {<Home />} />
          <Route path = "TechStack" element = {<TechStack/>} />
          <Route path = "Industries" element = {<Industries/>} />
          <Route path = "Services" element = {<Services/>} />
          <Route path = "About" element = {<About/>} />
          <Route path = "Contact" element = {<Contact/>} />
          
          {/* Inside NavMenu Pages */}
          <Route path = "FrontendWeb" element = {<FrontendWeb/>} />
          <Route path = "BackendWeb" element = {<BackendWeb/>} />
          <Route path = "MobileApp" element = {<MobileApp/>} />
          <Route path = "Android" element = {<Android/>} />
          <Route path = "Angular" element = {<Angular/>} />
          <Route path = "Ios" element = {<Ios/>} />
          <Route path = "Java" element = {<Java/>} />
          <Route path = "JSReact" element = {<JSReact/>} />
          <Route path = "Net" element = {<Net/>} />
          <Route path = "Php" element = {<Php/>} />
          <Route path = "Python" element = {<Python/>} />
          <Route path = "ReactNative" element = {<ReactNative/>} />
          <Route path = "Vue" element = {<Vue/>} />
          <Route path = "Healthcare" element = {<Healthcare/>} />
          <Route path = "Finance" element = {<Finance/>} />
          <Route path = "Logistics" element = {<Logistics/>} />
          <Route path = "Telecom" element = {<Telecom/>} />
          <Route path = "Automotive" element = {<Automotive/>} />
          <Route path = "Media" element = {<Media/>} />
          {/* . */}

          <Route path = "WebDevelopment" element = {<WebDevelopment/>} />
          <Route path = "MobileAppDevelopment" element = {<MobileAppDevelopment/>} />
          <Route path = "CustomSoftware" element = {<CustomSoftware/>} />
          <Route path = "CrossPlatform" element = {<CrossPlatform/>} />
          <Route path = "QualityAssurance" element = {<QualityAssurance/>} />
          <Route path = "BusinessAnalysis" element = {<BusinessAnalysis/>} />
          <Route path = "UiUxDesign" element = {<UiUxDesign/>} />
          <Route path = "SolutionArchitecture" element = {<SolutionArchitecture/>} />
          <Route path = "ProjectManagement" element = {<ProjectManagement/>} />
          <Route path = "ITSecurity" element = {<ITSecurity/>} />
          <Route path = "Devops" element = {<Devops/>} />
          <Route path = "CloudDevelopment" element = {<CloudDevelopment/>} />
          
        </Routes>
        <Footer/>
      </Router>
      
      

      
    </div>
  );
}

export default App;

      