import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import PersonalInformation from './pages/PersonalInformation';
import Login from './pages/Login';
import Register from './pages/Register';
import FrequentActions from './pages/FrequentActions';
import Bienvenida from './pages/bienvenida'; // Ajusta la ruta según la ubicación del archivo
import InfoPersonal from './pages/informacionPersonal';
import ChangesPass from './pages/cambioPass';
import GastosIngresos from './pages/gastosIngresos';
import ElegibilidadCredito from './pages/elegibilidadDeCredito'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Historial from './pages/Historial';

setupIonicReact();

const App: React.FC = () => (
  <IonApp className='bg-white'>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/frequent">
          <FrequentActions />
        </Route>
        <Route exact path="/ElegibilidadCredito">
        <ElegibilidadCredito />
        </Route>
        <Route exact path="/historial">
          <Historial />
        </Route>
        <Route exact path="/gastosIngresos">
        <GastosIngresos />
        </Route>
        <Route exact path="/per-info">
          <PersonalInformation />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/Bienvenida">
          <Bienvenida />
        </Route>
        <Route exact path="/InfoPersonal">
          <InfoPersonal />
        </Route>
        <Route exact path="/ChangesPass">
          <ChangesPass />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
