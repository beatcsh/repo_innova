import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ChevronLeft } from "lucide-react";

const AnalisisInteligente: React.FC = () => {
    return (
        <IonPage>
            <IonContent>

                <p className="text-4xl">analisis inteligente</p>
                <div className="flex flex-col items-center justify-center mt-10">

                <a href="/analisis" className="w-[80%] !text-black mt-2">
                        <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                            Análisis de Gastos 
                        </div>
                    </a>

                    <a href="/ElegibilidadCredito" className="w-[80%] !text-black mt-8">
                        <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                            Elegibilidad de Credito
                        </div>
                    </a>

                    <a href="/solvencia" className="w-[80%] !text-black mt-8">
                        <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                            Prediccion de solvencia
                        </div>
                    </a>

                    <a href="/PrediccionesInversiones" className="w-[80%] !text-black mt-8">
                        <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                            Oportunidades de Inversion
                        </div>
                    </a>

                    <a href="/GastosIngresos" className="w-[80%] !text-black mt-8">
                        <div className="w-[100%] bg-gray-200 rounded-xl p-2 hover:bg-gray-300 transition-all duration-300 shadow-[0px_4px_10px_rgba(128,0,128,0.5)] text-center">
                            Gastos e Ingresos
                        </div>
                    </a>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default AnalisisInteligente;
