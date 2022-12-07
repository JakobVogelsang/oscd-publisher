import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import './data-set-element-editor.js';
import '../foundation/components/filtered-list.js';
import './sampled-value-control-element-editor.js';
import type { FilteredList } from '../foundation/components/filtered-list.js';
export declare class SampledValueControlEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    selectedSampledValueControl?: Element;
    selectedDataSet?: Element | null;
    selectionList: FilteredList;
    selectSampledValueControlButton: Button;
    /** Resets selected SMV and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private selectSMVControl;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
