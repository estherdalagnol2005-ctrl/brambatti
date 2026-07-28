/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from 'react';
import ServiceArea from './ServiceArea';

export default function ServiceAreaCopy() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>('#atendimento');

    if (!section) return;

    const replacements = new Map([
      [
        'Somente as áreas destacadas em vermelho no mapa ficam fora da nossa cobertura.',
        'As regiões destacadas em vermelho fazem parte da área de atendimento de outro distribuidor oficial da Ecosmetics.',
      ],
      [
        'Áreas em vermelho: regiões sem atendimento',
        'Áreas em vermelho: atendimento de outro distribuidor oficial',
      ],
    ]);

    section.querySelectorAll<HTMLElement>('p, span').forEach((element) => {
      const replacement = replacements.get(element.textContent?.trim() ?? '');

      if (replacement) {
        element.textContent = replacement;
      }
    });

    const map = section.querySelector('svg');
    map?.setAttribute(
      'aria-label',
      'Mapa do Rio Grande do Sul com as áreas atendidas por outro distribuidor oficial destacadas em vermelho'
    );
  }, []);

  return <ServiceArea />;
}
