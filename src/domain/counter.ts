/**
 * ============================================================================
 * 🥊 RETO 01 — Dominio del Contador (TypeScript puro)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 *
 * 📖 CONTEXTO (BASE PARA EL SCREENCAST):
 * El Bar Salesiano necesita contadores de productos (sanduches, empanadas,
 * jugos). Este archivo es el "motor" lógico: no usa React Native, solo
 * TypeScript puro, por eso se puede probar sin encender la app.
 *


export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';

/**
 * 📌 Configuración del contador.
 *
 * valor  → número actual.
 * paso   → cuánto sube o baja en cada toque.
 * minimo → límite inferior.
 * maximo → límite superior.
 */
export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}

/**
 * Calcula el siguiente valor del contador aplicando
 * una dirección y el paso.
 *
 * @param config - Configuración actual del contador.
 * @param direccion - 'incrementar' para subir o 'decrementar' para bajar.
 * @returns El nuevo valor dentro del rango [minimo, maximo].
 */
export function calcularValor(
  config: ContadorConfig,
  direccion: Direccion
): number {
  const nuevoValor =
    direccion === 'incrementar'
      ? config.valor + config.paso
      : config.valor - config.paso;

  // Evitamos que el contador salga del rango permitido.
  return Math.min(
    config.maximo,
    Math.max(config.minimo, nuevoValor)
  );
}

/**
 * Determina el estado de la interfaz según la posición del valor.
 *
 * @param valor - Número actual del contador.
 * @param config - Configuración del contador.
 * @returns:
 * 'MINIMO' → cuando llegó al mínimo.
 * 'MAXIMO' → cuando llegó al máximo.
 * 'IDLE'   → cuando está entre ambos límites.
 */
export function estadoUI(
  valor: number,
  config: ContadorConfig
): EstadoUI {
  if (valor === config.minimo) {
    return 'MINIMO';
  }

  if (valor === config.maximo) {
    return 'MAXIMO';
  }

  return 'IDLE';
}