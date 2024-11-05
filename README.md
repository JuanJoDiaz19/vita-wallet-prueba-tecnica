
# Proyecto Vita Wallet Next.js

Este proyecto está construido con Next.js, un framework de React para crear aplicaciones web rápidas y optimizadas.

## Requisitos

- [Node.js](https://nodejs.org/) versión 14.x o superior (incluye npm como gestor de paquetes)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/JuanJoDiaz19/vita-wallet-prueba-tecnica.git
   cd tu_repositorio
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

## Configuración

Para que la aplicación funcione correctamente, es necesario crear un archivo `.env.local` en la raíz del proyecto con la siguiente variable de entorno:

```env
NEXT_PUBLIC_BACKEND_URL=https://api.qa.vitawallet.io/api
```

Esta variable define la URL de la API que el frontend de Next.js utilizará para comunicarse con el backend.

## Ejecución en Modo Desarrollo

Para iniciar el servidor en modo de desarrollo, ejecuta:

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en [http://localhost:3000](http://localhost:3000), donde podrás ver la aplicación en tu navegador. Cualquier cambio en el código se reflejará automáticamente.

## Compilación para Producción

Para construir la aplicación para producción, usa el siguiente comando:

```bash
npm run build
```

Este comando generará una versión optimizada de la aplicación en la carpeta `.next`, lista para ser desplegada en un entorno de producción.

## Ejecución en Producción

Después de compilar el proyecto, puedes iniciarlo en modo de producción con:

```bash
npm run start
```

Esto ejecutará la aplicación en [http://localhost:3000](http://localhost:3000) en modo producción.

## Despliegue

Esta aplicación puede desplegarse en plataformas como [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/) sin configuración adicional.
