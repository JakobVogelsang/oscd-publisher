declare type Update = {
    element: Element;
    attributes: Record<string, string | null>;
};
/** @returns Update actions for `DataSet`s attributes and its `datSet` references */
export declare function updateDateSetName(dataSet: Element, attr: Record<string, string | null>): Update[];
export {};
