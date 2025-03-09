import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React from "react";


const Bienvenida: React.FC = () => {
    return (
        <IonPage >
            <div className='bg-purple-700 min-h-screen flex flex-col justify-center items-center'>
            <i className='bx bxs-chevron-left text-4xl text-violet-950 absolute top-4 left-4'></i>
                <p className='text-white font-sans text-2xl m-4'>Prediccion Financiera Inteligente</p>
                  <img className='mb-6 ' src="../assets/logoInnovaBank.jpeg" alt="logo de innovaBank" />
            <button type='submit' className="w-[200px] h-[30px] !rounded-xl animate-pulse bg-purple-300 " onClick={() => window.location.href = '/'}>Glass button</button>
           
            </div>
        </IonPage>
    );
};

export default Bienvenida;
