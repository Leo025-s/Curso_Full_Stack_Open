markdown
# Aplicación Web de una sola página - Visirar una página

```mermaid
sequenceDiagram
  participant Usuario
  participant Navegador
  participant Servidor

  Usuario->>Navegador: Visita la "Aplicación de una sola página"
  Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate Servidor
  Servidor-->>Navegador: Code 200 OK - Archivo HTML base
  deactivate Servidor

  Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Servidor
  Servidor-->>Navegador: Code 200 OK - Archivo CSS
  deactivate Servidor

  Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate Servidor
  Servidor-->Navegador: Code 200 OK - Archivo JavaScript de la SPA
  deactivate Servidor

  Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate Servidor
  Servidor-->>Navegador: Code 200 OK - JSON con todas las notas
  deactivate Servidor

  

