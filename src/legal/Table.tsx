import type { ReactNode } from 'react';

/** Tabela com rolagem horizontal própria — o corpo da página nunca rola. */
export function Table({
  head,
  children,
}: {
  head: string[];
  children: ReactNode;
}) {
  return (
    <div className="TableWrap">
      <table className="Table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
