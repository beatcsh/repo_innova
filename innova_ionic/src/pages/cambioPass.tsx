import { IonContent, IonItem, IonLabel, IonPage, IonRouterLink } from "@ionic/react";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const ChangesPass: React.FC = () => {
    const [actual, setActual] = useState("");
    const [nueva, setNueva] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [showActualPassword, setShowActualPassword] = useState(false);
    const [showNuevaPassword, setShowNuevaPassword] = useState(false);
    const [showConfirmarPassword, setShowConfirmarPassword] = useState(false);

    return (
        <IonPage>
            <IonRouterLink href='InfoPersonal' className='p-2' >
                    <ChevronLeft size={35} />
            </IonRouterLink>

            <IonContent className="bg-white flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="avatar mt-12 mb-4">
                        <img className="w-40 h-40 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Foto de perfil" />
                    </div>

                    <p className="font-bold text-lg mb-6">Información Personal</p>

                    <IonItem className="mb-4">
                        <IonLabel position="stacked">Contraseña Actual</IonLabel>
                        <div className="w-64 relative flex justify-between items-center rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md">
                            <input
                                type={showActualPassword ? "text" : "password"}
                                value={actual}
                                onChange={(e) => setActual(e.target.value)}
                                className="w-full mt-1 pl-3 pr-10"  // Agregar padding a la derecha para el ícono
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                                onClick={() => setShowActualPassword(!showActualPassword)}
                            >
                                {showActualPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </IonItem>


                    <IonItem className="mb-4">
                        <IonLabel position="stacked">Nueva Contraseña</IonLabel>
                        <div className="w-64 relative flex justify-between items-center rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md">
                        <input
                            type={showNuevaPassword ? "text" : "password"}
                            value={nueva}
                            onChange={(e) => setNueva(e.target.value)}
                            className="w-full mt-1"
                        />
                        <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                                onClick={() => setShowNuevaPassword(!showNuevaPassword)}
                            >
                                {showNuevaPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </IonItem>
                    

                    <IonItem className="mb-6">
                        <IonLabel position="stacked">Confirmar nueva contraseña</IonLabel>
                        <div className="w-64 relative flex justify-between items-center rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md">
                        <input
                            type={showConfirmarPassword ? "text" : "password"}
                            value={confirmar}
                            onChange={(e) => setConfirmar(e.target.value)}
                            className="w-full mt-1"
                        />
                        <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                                onClick={() => setShowConfirmarPassword(!showConfirmarPassword)}
                            >
                                {showConfirmarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </IonItem>
                    <button className="bg-purple-500 w-50 h-10 p-2 flex justify-center items-center !rounded-3xl hover:bg-purple-300 transition"
                    >Confirmar</button>


                </div>
            </IonContent>
        </IonPage>
    );

};

export default ChangesPass;