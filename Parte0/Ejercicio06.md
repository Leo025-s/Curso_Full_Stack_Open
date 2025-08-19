markdown
# Aplicación Web de una sola página - Enviar una nota

```mermaid
sequenceDiagram
  participant Usuario
  participant Navegador
  participant Servidor

  Usuario->>Navegador: Escribe texto y hace clic en "Save"
  Navegador->>Servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate Servidor
  Servidor-->>Navegador: Code 201 Created - JSON con craeado y confirmación

  
