/**
 * ============================================================================
 * 🥊 RETO 03 — BotonContador (Pressable reutilizable)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 *
 * 📖 MISIÓN:
 * Botón reutilizable con props tipadas, variantes de color y feedback táctil.
 *
 * 🎨 Paleta UETS (referencia): primary #FDE047 · secondary #38BDF8 · danger #F43F5E
 *
 */

import { Pressable, StyleSheet, Text } from 'react-native';

export type BotonVariante = 'primary' | 'danger' | 'secondary';

export interface BotonContadorProps {
  label: string;
  onPress: () => void;
  variante?: BotonVariante;
  disabled?: boolean;
}

export function BotonContador({
  label,
  onPress,
  variante = 'primary',
  disabled = false,
}: BotonContadorProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variante],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#0A0A0A',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#FDE047',
  },
  secondary: {
    backgroundColor: '#38BDF8',
  },
  danger: {
    backgroundColor: '#F43F5E',
  },
  label: {
    fontWeight: '800',
    fontSize: 16,
    color: '#0A0A0A',
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  disabled: {
    opacity: 0.4,
  },
});
