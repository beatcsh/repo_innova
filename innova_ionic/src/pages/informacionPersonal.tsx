import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar, IonButton, IonInput, IonLabel, IonItem } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Pencil } from "lucide-react";
import { getByPlaceholderText } from '@testing-library/react';
import { ChevronLeft } from "lucide-react";


const InfoPersonal: React.FC = () => {
    // Estado para activar modo edición
    const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({
        name: false,
        email: false,
        phone: false,
    });

    // Estado para almacenar los datos del usuario
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    // Simulación de obtener datos de la base de datos
    useEffect(() => {
        // Aquí harías una petición a la BD (ejemplo con fetch o axios)
        const fetchUserData = async () => {
            try {
                const response = await fetch("/api/user"); // Reemplázalo con tu endpoint real
                const data = await response.json();
                setUserData(data); // Cargar los datos de la BD en el estado
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        fetchUserData();
    }, []);

    // Guardar cambios
    const handleSave = async (field: keyof typeof userData) => {
        try {
            // Aquí actualizas solo el campo que se modificó
            const response = await fetch("/api/update-user", {
                method: "POST",
                body: JSON.stringify({ [field]: userData[field] }), // Aquí pasas el campo específico
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Error al actualizar la información");
            }

            alert("¡Información guardada correctamente!");
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
            alert("Hubo un error al guardar los datos.");
        }
    };

    const handleSaveAll = async () => {
        try {
            // Aquí podrías hacer una petición a tu backend para actualizar toda la información del usuario
            const response = await fetch("/api/update-user", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Error al actualizar la información");
            }

            alert("¡Información guardada correctamente!");

            // Desactivar el modo de edición en todos los campos
            setEditMode({ name: false, email: false, phone: false });
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
            alert("Hubo un error al guardar los datos.");
        }
    };

    return (
        <IonPage>
            <div className='p-2'>
                <button>
                    <ChevronLeft size={35} />
                </button>
            </div>
            <IonContent className="bg-white flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="avatar mt-12 mb-4">
                        <img className="w-40 h-40 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Foto de perfil" />
                    </div>

                    <p className="font-bold text-lg mb-6">Información Personal</p>

                    <IonItem className="mb-4">
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <div className="w-64 flex justify-between items-center rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md">
                            {editMode.name ? (
                                <IonInput
                                    placeholder="Ingresa tu Nombre"
                                    className="w-full p-3 rounded-2xl border border-gray-300 shadow-md bg-gray-100"
                                    value={userData.name}
                                    onIonChange={(e) => setUserData({ ...userData, name: e.detail.value! })}
                                    onIonBlur={() => handleSave("name")}
                                />
                            ) : (
                                <p className="w-full">{userData.name || "Cargando..."}</p>
                            )}
                            <IonButton
                                fill="clear"
                                size="small"
                                onClick={() => setEditMode((prev) => ({ ...prev, name: true }))}
                                className="ml-auto text-purple-500"
                            >
                                <Pencil className="w-4 h-4" />
                            </IonButton>
                        </div>
                    </IonItem>


                    <IonItem className="mb-4">
                        <IonLabel position="stacked">Correo Electrónico</IonLabel>
                        <div className="w-64 flex justify-between items-center rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md">
                            {editMode.email ? (
                                <IonInput
                                    className="w-full p-3 rounded-2xl border border-gray-300 shadow-md bg-gray-100"
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    value={userData.email}
                                    onIonChange={(e) => setUserData({ ...userData, email: e.detail.value! })}
                                    onIonBlur={() => handleSave("email")}
                                />
                            ) : (
                                <p className="w-full">{userData.name || "Cargando..."}</p>
                            )}
                            <IonButton
                                fill="clear"
                                size="small"
                                onClick={() => setEditMode((prev) => ({ ...prev, email: true }))}
                                className="ml-auto text-purple-500"
                            >
                                <Pencil className="w-4 h-4" />
                            </IonButton>
                        </div>

                    </IonItem>

                    <IonItem className="mb-4">
                        <IonLabel position="stacked">
                            Teléfono
                        </IonLabel>
                        <div className="w-64 flex justify-between items-center rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md">
                            {editMode.phone ? (
                                <IonInput
                                    className="w-full p-3 rounded-2xl border border-gray-300 shadow-md bg-gray-100"
                                    type="tel"
                                    placeholder="Ingresa tu Numero de Telefono"
                                    value={userData.phone}
                                    onIonChange={(e) => setUserData({ ...userData, phone: e.detail.value! })}
                                    onIonBlur={() => handleSave("phone")}
                                />
                            ) : (
                                <p className="w-full">{userData.name || "Cargando..."}</p>
                            )}
                            <IonButton
                                fill="clear"
                                size="small"
                                onClick={() => setEditMode((prev) => ({ ...prev, phone: true }))}
                                className="ml-2 text-purple-500"
                            >
                                <Pencil className="w-4 h-4" />
                            </IonButton>
                        </div>
                    </IonItem>

                    <IonRouterLink href='ChangesPass' className="mt-6 text-purple-500 hover:underline">
                        Cambiar Contraseña
                    </IonRouterLink>
                    <button
                        onClick={handleSaveAll}
                        className="bg-purple-500 w-50 h-10 p-2 flex justify-center items-center !rounded-3xl hover:bg-purple-300 transition"
                    >
                        Guardar Cambios
                    </button>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default InfoPersonal;
