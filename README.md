# Cat Randomizer App

Una mini aplicación web que muestra **imágenes y datos curiosos sobre gatos** utilizando dos APIs públicas:

- [The Cat API](https://thecatapi.com/) — para obtener imágenes aleatorias de gatos.  
- [Cat Fact Ninja](https://catfact.ninja/) — para mostrar datos curiosos sobre felinos.

---

## **Ejecución local con Docker**

### 1️. Clonar el repositorio
```
git clone git@github.com:pauliCodes-x/app-ing-software-cats.git
cd app-ing-software-cats
```

### 2. Construir la imagen Docker

```bash
docker build -t cat-app .
```


### 3. Ejecutar el contenedor
```bash
docker run -d -p 8080:80 cat-app
```

Luego abrir en el navegador:
- http://localhost:8080

---

# Detalles técnicos

- Frontend: HTML5, CSS3, JavaScript.

- Servidor web: Nginx (imagen base nginx:alpine).

- APIs externas:

      - https://catfact.ninja/fact

      - https://api.thecatapi.com/v1/images/search

---
