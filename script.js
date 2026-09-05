/* ============================================================================
   SOFTCORE SYSTEMS — Animaciones de aparición al hacer scroll
   ----------------------------------------------------------------------------
   Mejora progresiva: el CSS solo esconde los elementos si este script agrega la
   clase .js-reveal al <html>. Sin JavaScript la página se ve completa igual.

   Cómo funciona:
   1. Marca el documento como "con JS" para activar el estado inicial oculto.
   2. En cada scroll (y al redimensionar) revela los elementos [data-reveal]
      que ya entraron en pantalla, y también los que quedaron por encima de la
      vista. Así ningún bloque queda invisible al saltar con los anclajes del
      menú o al hacer un scroll muy rápido.
   3. Aplica un retardo escalonado entre elementos hermanos (efecto cascada).
   4. Respeta la preferencia del sistema "reducir movimiento".
   ========================================================================== */

(function () {
    "use strict";

    var SELECTOR  = "[data-reveal]";
    var VISIBLE   = "is-revealed";
    var STEP_MS   = 80;    /* retardo entre hermanos */
    var MAX_STEPS = 6;     /* tope del escalonado */
    var TRIGGER   = 0.88;  /* se revela al llegar al 88% del alto de pantalla */

    var pending = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
    if (!pending.length) {
        return;
    }

    var reduceMotion = window.matchMedia &&
                       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Con movimiento reducido se muestra todo de una, sin animación. */
    if (reduceMotion) {
        reveal(pending);
        return;
    }

    /* A partir de acá el CSS puede ocultar los elementos sin riesgo. */
    document.documentElement.classList.add("js-reveal");

    /* --- Retardo escalonado según la posición entre hermanos --------------- */
    var counters = [];   /* pares [nodo padre, cantidad] */

    pending.forEach(function (el) {
        var index = bump(el.parentNode);
        el.style.transitionDelay = Math.min(index, MAX_STEPS) * STEP_MS + "ms";
    });

    /* --- Ciclo de revelado -------------------------------------------------- */
    var ticking = false;

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    window.addEventListener("load", update);

    function request() {
        if (ticking) {
            return;
        }
        ticking = true;
        window.requestAnimationFrame(function () {
            ticking = false;
            update();
        });
    }

    function update() {
        var limit = window.innerHeight * TRIGGER;
        var still = [];

        pending.forEach(function (el) {
            /* Entró en pantalla, o ya quedó por encima de la vista. */
            if (el.getBoundingClientRect().top < limit) {
                el.classList.add(VISIBLE);
            } else {
                still.push(el);
            }
        });

        pending = still;

        if (!pending.length) {
            window.removeEventListener("scroll", request);
            window.removeEventListener("resize", request);
        }
    }

    /* --- Utilidades --------------------------------------------------------- */
    function bump(parent) {
        for (var i = 0; i < counters.length; i++) {
            if (counters[i][0] === parent) {
                return counters[i][1]++;
            }
        }
        counters.push([parent, 1]);
        return 0;
    }

    function reveal(list) {
        list.forEach(function (el) {
            el.classList.add(VISIBLE);
        });
    }
}());
