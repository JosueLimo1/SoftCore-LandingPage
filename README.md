# SoftCore Systems — Landing page

Landing page corporativa de **SoftCore Systems**, empresa de desarrollo de software a medida
planteada como proyecto para la cátedra **Administración de Sistemas de Información**
(comisión 4K1) de la **Universidad Tecnológica Nacional — Facultad Regional Tucumán**.

Todo el contenido del sitio (misión, visión, servicios, stack tecnológico y metodología)
proviene de los trabajos prácticos TP1 y TP2 de la materia.

---

## Cómo verla

**Opción 1 — abrirla directo:** descargar el proyecto y hacer doble clic en `index.html`.
No hace falta instalar nada.

**Opción 2 — clonarla:**

```bash
git clone https://github.com/USUARIO/softcore-landing.git
cd softcore-landing
```

Y abrir `index.html` en el navegador.

---

## Tecnologías

Sitio estático, sin frameworks ni dependencias:

- **HTML5** semántico
- **CSS3** con variables (design tokens), Grid, Flexbox y `clamp()` para tipografía fluida
- **JavaScript** mínimo (`script.js`, ~90 líneas) solo para las animaciones de aparición al
  hacer scroll. Es una mejora progresiva: sin JS la página se ve completa igual.
- Tipografías **Inter** y **JetBrains Mono** vía Google Fonts

## Estructura

```
softcore-landing/
├── index.html      Estructura y contenido
├── styles.css      Estilos (17 bloques numerados, ver índice al inicio del archivo)
├── script.js       Animaciones de aparición al hacer scroll
└── assets/
    ├── images/
    └── icons/
```

## Secciones

`Hero` · `Sobre SoftCore` · `Servicios` · `Metodología` · `Tecnología` · `Enfoque` ·
`Equipo` · `Contacto`

## Diseño

- Paleta: negro `#080808` dominante, blanco `#F5F5F5` y naranja `#FF5A1F` como acento
- Estética minimalista, dark, con mucho espacio en blanco y jerarquía tipográfica marcada
- Responsive: desktop (>1200px), tablet (768–1199px) y mobile (<768px)
- Accesibilidad: HTML semántico, navegación por teclado, estados de foco visibles,
  contraste AA y soporte de `prefers-reduced-motion`

## Pendientes

- Datos de contacto reales (email, teléfono, redes). Los lugares están marcados con
  comentarios `TODO CONTACTO` en `index.html`.
- Sección de proyectos / casos de éxito (todavía no hay proyectos para mostrar).
- Roles de cada integrante en la sección Equipo.

## Equipo

Estudiantes de Ingeniería en Sistemas de Información — UTN FRT, comisión 4K1:

| Integrante | Legajo |
|---|---|
| Josué Limo | 58000 |
| Iván Herrera | 58369 |
| Víctor Librán | 57810 |
| Carlos Lix Klett | 57809 |
