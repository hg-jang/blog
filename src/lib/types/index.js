/**
 * @typedef {Object} Post
 * @property {string} title
 * @property {string} slug
 * @property {string} description
 * @property {string} date
 * @property {string[]} categories
 * @property {boolean} published
 */

/**
 * @typedef {'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'blue'} DEFAULT_COLOR_SET
 */
/**
 * @readonly
 * @type {DEFAULT_COLOR_SET[]}
 */
export const DEFAULT_COLORS = [
  'dark',
  'red',
  'green',
  'yellow',
  'indigo',
  'purple',
  'pink',
  'blue',
];

/**
 * @typedef {'primary' | 'warn' | 'danger'} LABELED_COLOR_SET
 */

/**
 * @typedef {DEFAULT_COLOR_SET | 'custom'} CUSTOM_COLOR_SET
 */

class Type {}

export default Type;
