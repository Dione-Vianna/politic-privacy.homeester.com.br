import type { ReactNode } from 'react';

/**
 * Marca uma pendência. Renderiza destacado de propósito: nenhuma pode
 * sobreviver à publicação definitiva do documento.
 *
 * `tipo` separa o que espera decisão de advogado do que espera informação
 * técnica — são filas diferentes, com responsáveis diferentes.
 */
export function Todo({
  children,
  tipo = 'JURÍDICO',
}: {
  children: ReactNode;
  tipo?: 'JURÍDICO' | 'TÉCNICO';
}) {
  return (
    <span className="Todo">
      [DEFINIR {tipo}: {children}]
    </span>
  );
}

export function TodoBlock({ children }: { children: ReactNode }) {
  return <div className="TodoBlock">{children}</div>;
}
