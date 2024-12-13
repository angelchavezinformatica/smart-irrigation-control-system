# Sistema de control de terreno

**Sistema de control de terreno** es un sistema para la visualización de la temperatura, humedad y tiempo de riego estimado para un terreno.

## Tecnologías utilizadas

- **Frontend**:
  - React
  - TypeScript
  - TailwindCSS
  - Lucide React
  - React Circular Progressbar
- **Backend**:
  - Python
  - FastAPI
- **Hardware**:
  - Arduino

## Instalación

1. **Clona este repositorio** en tu máquina local:

   ```bash
   git clone https://github.com/angelchavezinformatica/smart-irrigation-control-system.git
   cd smart-irrigation-control-system
   ```

1. **Instala las dependencias**:

- **Backend**: Muevete a la carpeta `backend`, y ejecuta el siguiente comando:

  ```bash
  pip install -r requirements.txt
  ```

- **Frontend**: Muevete a la carpeta `frontend`, y ejecuta el siguiente comando:

  ```bash
  npm install
  ```

1. **Ejecuta la aplicación**:

   - Ejecuta el archivo `build.py` para crear el build de la aplicación.

   - Inicia el servidor:

   ```bash
   fastapi run main.py
   ```
