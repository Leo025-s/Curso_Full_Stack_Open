markdown
# Aplicación Web de una sola página - Visirar una página

```mermaid
sequenceDiagram
  participant Usuario
  participant Navegador
  participant Servidor

  Usuario->>Navegador: Visita la "Aplicación de una sola página"
  Navegador->>Servidor: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate Servidor
  Servidor-->>Navegador: Code 304 Not Modified - Archivo CSS
  deactivate Servidor

