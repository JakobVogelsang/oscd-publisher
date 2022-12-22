import { Remove, Update } from '@openscd/open-scd-core';
/** @returns Action array removing multi FCDA and its subscriber information */
export declare function removeFCDAs(fCDAs: Element[]): (Update | Remove)[];
/** @returns Action array removing FCDA and its subscriber information */
export declare function removeFCDA(fCDA: Element): (Update | Remove)[];
/** @returns Whether a data attribute is subscribed  */
export declare function isSubscribed(fcda: Element): boolean;
