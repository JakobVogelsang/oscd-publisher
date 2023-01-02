import { Insert, Remove, Update } from '@openscd/open-scd-core';
/** @returns action array to update all `GSEControl` attributes */
export declare function updateGseControl(gseControl: Element, attrs: Record<string, string | null>): (Update | Remove | Insert)[];
