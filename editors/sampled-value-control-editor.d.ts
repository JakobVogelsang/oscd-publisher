import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import './data-set-element-editor.js';
import '../foundation/components/oscd-filtered-list.js';
import './sampled-value-control-element-editor.js';
import type { OscdFilteredList } from '../foundation/components/oscd-filtered-list.js';
export declare class SampledValueControlEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    selectedSampledValueControl?: Element;
    selectedDataSet?: Element | null;
    selectionList: OscdFilteredList;
    selectSampledValueControlButton: Button;
    selectDataSetDialog: Dialog;
    /** Resets selected SMV and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private selectDataSet;
    private selectSMVControl;
    private renderSelectDataSetDialog;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
