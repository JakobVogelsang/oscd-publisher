import { Remove, Update } from '@openscd/open-scd-core';
export declare function removeDataSet(dataSet: Element): (Remove | Update)[];
/** @returns Update actions for `DataSet`s attributes and its `datSet` references */
export declare function updateDateSetName(dataSet: Element, attr: Record<string, string | null>): Update[];
