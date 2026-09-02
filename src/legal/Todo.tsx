import type { ReactNode } from 'react';

/**
 * Marca uma decisão que depende do jurídico. Renderiza destacado de propósito:
 * nenhuma destas pode sobreviver à publicação definitiva do documento.
 */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="Todo">[DEFINIR JURÍDICO: {children}]</span>;
}

export function TodoBlock({ children }: { children: ReactNode }) {
  return <div className="TodoBlock">{children}</div>;
}
