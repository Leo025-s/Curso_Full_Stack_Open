```markdown
```mermaid
flowchart TD
    A[Inicio] --> B[Proceso]
    B --> C{Condición?}
    C -->|Sí| D[Opción 1]
    C -->|No| E[Opción 2]
    D --> F[Fin]
    E --> F[Fin]
