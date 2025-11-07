# Proyecto de Clasificación e Interacción con ML5 / P5
## Introducción:
Este repositorio contiene una serie de ejercicios que exploran las capacidades de la Inteligencia Artificial en el navegador utilizando la librería ML5.js y P5.js para la visualización

**El proyecto está organizado en tres actividades principales**:

- **Actividad A**: Clasificación de una imagen subida

- **Actividad B**: Login (Credenciales) y reconocimiento de dibujo

- **Actividad C**: Clasificación en tiempo real usando la Webcam y respuesta de voz

## Tecnologias Usadas:

- **ML5.js**: Librería de aprendizaje automático fácil de usar para el desarrollo web

- **P5.js**: Librería de JavaScript para codificación creativa

- **HTML/CSS**: Estructura y estilos de la interfaz

- **Modelos de Teachable Machine**: Modelos entrenados (Carpeta models)

## Estructura del Proyecto:
```
/ENTREGABLE_TALLER_ML/ //Nombre del Proyecto
    - CSS       // Carpeta que almacena las Hojas de Estilos
        - EjercicioA.css
        - EjercicioB.css
        - EjercicioC.css
        - index.css
    - images    // Carpeta que almacena imagenes de los Objetos usados en la TAREA C
        - control remoto.jpeg
        - lampara sapo.jpeg
        - mando PS.jpeg
        - mouse.jpeg
        - tomatodo.jpeg
    - JS        // Script que Guarda la logica del ML
        - EjercicioA.js
        - EjercicioB.js
        - EjercicioC.js
        - index.js
    - models    //Modelo Entrenado en Teachable Machine
        - metadata.json
        - model.json
        - weights.bin
    - EjercicioA.html
    - EjercicioB.html
    - EjercicioC.html
    - index.html
    - README.md
```

## Ejecutar el Proyecto:
Dado que este proyecto carga modelos de Machine Learning de archivos locales, debe ser ejecutado a través de un servidor web local:

- Instalar un Servidor Local (Por Ejemplo VS Code)

- Abrir el Proyecto (En VS Code)

- Navega entre Archivos, dale Clic Derecho en *"index.html"* y dale a open with Live Server

__Nota: Si la cámara no inicia en la Actividad C, asegúrate de que el navegador tenga permisos para acceder a tu webcam__

## Descripción de las Actividades
**1. Actividad A**: Reconocimiento de Imagen

- Objetivo: Clasificar una imagen subida por el usuario

- Modelo Usado: MobileNet

- Funcionalidad: Muestra la etiqueta y el porcentaje de confianza de la clasificación

**2. Actividad B**: Login con Dibujo (Doodle)

- Objetivo: Autenticación de un usuario mediante credenciales y el reconocimiento de un dibujo simple realizado en el Canvas

- Modelo Usado: DoodleNet

- Funcionalidad: El usuario ingresa sus credenciales, dibuja en la "Zona CANVAS" y el modelo intenta clasificarlo

**3. Actividad C**: Clasificación Webcam y Voz

- Objetivo: Clasificación de objetos en tiempo real y síntesis de voz del resultado.

- Modelo Usado: Modelo de Teachable Machine entrenado con las clases: Tomatodo, Mouse, Mando de PS, Lámpara Sapo, Control Remoto.

- Funcionalidad:
    
    - Muestra el video de la webcam y la clasificación en el Canvas.

    - Permite configurar el Tono, Velocidad y Volumen.

    - Al presionar "Hablar Clasificación Actual", el sintetizador de voz del navegador anuncia el objeto detectado.