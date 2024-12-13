interface Props {
  status: string;
}

export function StatusSystem({ status }: Props) {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Estado del sistema
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Estado actual</p>
          <p
            className={`font-semibold ${
              status === "ACTIVO" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Ultima actualización</p>
          <p className="font-semibold">{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}
