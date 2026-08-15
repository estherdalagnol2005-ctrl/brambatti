/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const WHATSAPP_LINK_BASE = 'https://wa.me/5554992819218';

export const getWhatsAppLink = (message?: string) => {
  if (!message) return WHATSAPP_LINK_BASE;
  return `${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(message)}`;
};

export const INSTAGRAM_LINK = 'https://www.instagram.com/brambatti_/';
export const ADDRESS_TEXT = 'Estrada Municipal Vicente Menezes, 338 - Linha 40 – Caxias do Sul/RS, CEP 95044-030';
export const MAPS_LINK = 'https://maps.google.com/?q=Estrada+Municipal+Vicente+Menezes,+338+-+Linha+40+-+Caxias+do+Sul/RS';
