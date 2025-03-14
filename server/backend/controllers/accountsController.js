import { IonPage, IonContent, IonSelect, IonSelectOption, IonItem, IonLabel } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useHistory } from "react-router";
import { Bar } from "react-chartjs-2";

const GastosIngresos: React.FC = () => {
    const history = useHistory();
    const [selected, setSelected] = useState<"gastos" | "ingresos">("gastos");
    const [selectedMonth, setSelectedMonth] = useState<string>("");
    const [selectedYear, setSelectedYear] = useState<string>("2023");
    const [data, setData] = useState([]);
    const [total, setTotal] = useState<number>(0);

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

    const fetchGastosIngresosData = async (mes: string, año: string) => {
        const response = await fetch(`/movimientos/${mes}/${año}`);
        const result = await response.json();
        setData(result);
        setTotal(result.reduce((sum: number, item: any) => sum + item.monto, 0));
    };

    const handleDateChange = () => {
        if (selectedMonth && selectedYear) {
            fetchGastosIngresosData(selectedMonth, selectedYear);
        }
    };

    const chartData = {
        labels: data.map((d: any) => d.fecha),
        datasets: [
            {
                label: selected === "gastos" ? "Gastos" : "Ingresos",
                data: data.map((d: any) => d.monto),
                backgroundColor: selected === "gastos" ? "#f87171" : "#34d399",
            },
        ],
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="flex justify-between items-center p-4">
                    <button onClick={() => history.goBack()}>
                        <ChevronLeft size={35} />
                    </button>
                    <h3 className="p-2">Resumen Financiero</h3>
                    <button onClick={() => history.push("/InfoPersonal")}>Perfil</button>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <button
                        className={`w-30 h-8 px-6 py-2 !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selected === "gastos"
                            ? "bg-purple-800 text-white"
                            : "bg-purple-300 text-gray-700"
                            }`}
                        onClick={() => setSelected("gastos")}
                    >
                        💸 Gastos
                    </button>

                    <button
                        className={`w-30 h-8  px-6 py-2 !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${selected === "ingresos"
                            ? "bg-purple-800 text-white"
                            : "bg-purple-300 text-gray-700"
                            }`}
                        onClick={() => setSelected("ingresos")}
                    >
                        💰 Ingresos
                    </button>
                </div>

                <div className="flex justify-between items-center p-4">
                    <IonItem>
                        <IonLabel>Mes</IonLabel>
                        <IonSelect
                            value={selectedMonth}
                            onIonChange={(e) => setSelectedMonth(e.detail.value)}
                            placeholder=""
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
                            placeholder="Selecciona año"
                        >
                            {years.map((year) => (
                                <IonSelectOption key={year} value={year.toString()}>
                                    {year}
                                </IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>
                </div>

                <div className="mt-4 text-center">
                    <button
                        className="w-50 h-8 px-4 py-2 bg-purple-800 text-white !rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        onClick={handleDateChange}
                    >
                        Seleccionar Periodo
                    </button>
                </div>

                <div className="p-4">
                    <Bar data={chartData} />
                    <div className="mt-4 text-center text-lg font-semibold">
                        Total {selected === "gastos" ? "Gastos" : "Ingresos"}: ${total.toFixed(2)}
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default GastosIngresos;
