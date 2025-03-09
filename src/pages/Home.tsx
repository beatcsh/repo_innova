import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonButton} from "@ionic/react";
import { useIonRouter } from "@ionic/react";

const Home: React.FC = () => {
  const router = useIonRouter();

  const handleNavigation = () => {
    router.push("/bienvenida", "forward"); // Redirige a Bienvenida.tsx
  };
  const infoPersonal = () => {
    router.push("/InfoPersonal", "forward"); // Redirige a Bienvenida.tsx
  };

  return (
    <IonPage>
      <h1>Página de Inicio</h1>
      <IonButton onClick={handleNavigation}>Ir a Bienvenida</IonButton>
      <IonButton onClick={infoPersonal}>Ir a Bienvenida</IonButton>
    </IonPage>
  );
};


export default Home;