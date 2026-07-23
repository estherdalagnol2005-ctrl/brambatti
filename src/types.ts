/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will match Lucide icon names dynamically
}

export interface Region {
  id: string;
  name: string;
  description: string;
  mainCities: string[];
}

export interface CredibilityItem {
  id: string;
  metric: string;
  label: string;
}
