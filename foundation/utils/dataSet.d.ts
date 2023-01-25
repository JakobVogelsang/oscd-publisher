import { Insert, Remove, Update } from '@openscd/open-scd-core';
export declare function removeDataSet(dataSet: Element): (Remove | Update)[];
/** @returns Update actions for `DataSet`s attributes and its `datSet` references */
export declare function updateDateSetName(dataSet: Element, attr: Record<string, string | null>): Update[];
/** @returns Action inserting new `DataSet` to [[`parent`]] element */
export declare function addDataSet(parent: Element): Insert | null;
