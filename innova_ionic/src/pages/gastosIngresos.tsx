import {
    IonPage,
    IonContent,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonLabel,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { ChevronLeft } from "lucide-react";
import { useHistory } from "react-router";

const GastosIngresos: React.FC = () => {
    const history = useHistory();
    const [selected, setSelected] = useState<"gastos" | "ingresos">("gastos");
    const [selectedMonth, setSelectedMonth] = useState<string>("01");
    const [selectedYear, setSelectedYear] = useState<string>("2024");
    const [data, setData] = useState([]);
    const [balanceEstimate, setBalanceEstimate] = useState<number>(0);

    const months = [
        { label: "Enero", value: "01" },
        { label: "Febrero", value: "02" },
        { label: "Marzo", value: "03" },
        { label: "Abril", value: "04" },
        { label: "Mayo", value: "05" },
        { label: "Junio", value: "06" },
        { label: "Julio", value: "07" },
        { label: "Agosto", value: "08" },
        { label: "Septiembre", value: "09" },
        { label: "Octubre", value: "10" },
        { label: "Noviembre", value: "11" },
        { label: "Diciembre", value: "12" },
    ];

    const years = Array.from({ length: 11 }, (_, i) => 2015 + i);

    // Colores para la gráfica
    const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#F44336"];

    // Datos estáticos para pruebas
    const staticData = {
        gastos: [
            { name: "Alquiler", value: 500 },
            { name: "Comida", value: 300 },
            { name: "Transporte", value: 150 },
            { name: "Entretenimiento", value: 100 },
            { name: "Otros", value: 50 },
        ],
        ingresos: [
            { name: "Salario", value: 1200 },
            { name: "Freelance", value: 500 },
            { name: "Inversiones", value: 200 },
        ],
    };
 //montse
    // Simula obtener los datos según el tipo
    const fetchData = async () => {
        setData(staticData[selected]);

        // Calcular la estimación del saldo
        const totalIngresos = staticData.ingresos.reduce((acc, item) => acc + item.value, 0);
        const totalGastos = staticData.gastos.reduce((acc, item) => acc + item.value, 0);
        const estimatedBalance = totalIngresos - totalGastos;
        setBalanceEstimate(estimatedBalance);
    };

    const calculateDifference = () => {
        const totalIngresos = staticData.ingresos.reduce((acc, item) => acc + item.value, 0);
        const totalGastos = staticData.gastos.reduce((acc, item) => acc + item.value, 0);
        return totalIngresos - totalGastos;
    };

    useEffect(() => {
        fetchData();
    }, [selected, selectedMonth, selectedYear]);

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="flex justify-between items-center p-4">
                    <button onClick={() => history.goBack()}>
                        <ChevronLeft size={35} />
                    </button>
                    <h3 className="p-2">Resumen Financiero</h3>
                    <button onClick={() => history.push("/InfoPersonal")}>
                        <img
                            className="w-10 h-10 rounded-full border-2 border-purple-500"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="Foto de perfil"
                        />
                    </button>
                </div>

                {/* Botones dinámicos */}
                <div className="flex justify-center gap-4 mt-5">
                    <button
                        className={`w-30 h-8 px-6 py-2 !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selected === "gastos"
                            ? "bg-purple-500 text-white"
                            : "bg-purple-200 text-gray-700"
                            }`}
                        onClick={() => setSelected("gastos")}
                    >
                        💸 Gastos
                    </button>

                    <button
                        className={`w-30 h-8 px-6 py-2 !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selected === "ingresos"
                            ? "bg-purple-500 text-white"
                            : "bg-purple-200 text-gray-700"
                            }`}
                        onClick={() => setSelected("ingresos")}
                    >
                        💰 Ingresos
                    </button>
                </div>

                {/* Selectores de mes y año */}
                <div className="flex justify-between items-center p-4 mt-4">
                    <IonItem>
                        <IonLabel>Mes</IonLabel>
                        <IonSelect
                            value={selectedMonth}
                            onIonChange={(e) => setSelectedMonth(e.detail.value)}
                        >
                            {months.map((month) => (
                                <IonSelectOption key={month.value} value={month.value}>
                                    {month.label}
                                </IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>

                    <IonItem>
                        <IonLabel>Año</IonLabel>
                        <IonSelect
                            value={selectedYear}
                            onIonChange={(e) => setSelectedYear(e.detail.value)}
                        >
                            {years.map((year) => (
                                <IonSelectOption key={year} value={year.toString()}>
                                    {year}
                                </IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>
                </div>

                {/* Gráfica de pastel */}
                <div className="flex justify-center mt-6">
                    {data.length > 0 ? (
                        <PieChart width={320} height={320}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={110}
                                innerRadius={60}
                                paddingAngle={3}
                                dataKey="value"
                                isAnimationActive={true}
                                animationDuration={1000}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                        style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3))" }}
                                    />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: "##6B21A8", color: "#FFFFFF", borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.3", padding: "8px" }} />
                            <Legend
                                iconSize={12}
                                layout="horizontal"
                                align="center"
                                verticalAlign="bottom"
                                wrapperStyle={{ color: "#4B5563", fontSize: "14px" }}
                            />
                        </PieChart>
                    ) : (
                        <p className="text-gray-500 text-center mt-10">No hay datos disponibles</p>
                    )}
                </div>

                <div className="flex justify-center items-center mt-6 shadow-2xl">
                    <div className="!rounded-2xl bg-purple-300 w-64 p-4 shadow-2xl">
                        <p className="w-full text-l font-semibold text-center">
                            Diferencia entre Ingresos y Gastos:{" "}
                            <span className={calculateDifference() >= 0 ? "text-green-500" : "text-red-500"}>
                                ${calculateDifference()}
                            </span>
                        </p>

                        <p className="w-full !rounded-2xl bg-purple-200 text-l font-semibold text-center shadow-2xl">
                            Se estima que en este periodo de tiempo tu cuenta termine con un saldo de ${balanceEstimate.toFixed(2)}
                        </p>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default GastosIngresos;
