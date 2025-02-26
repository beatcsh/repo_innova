import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const PersonalInformation: React.FC = () => {
  return (
    <IonPage className='w-[100%] h-[100vh] grid place-items-center'>
      <div className='text-3xl font-bold text-blue-400 animate-pulse my-[200px]'>personalinformation</div>
    </IonPage>
  );
};

export default PersonalInformation;
