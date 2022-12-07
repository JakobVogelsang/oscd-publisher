import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import './data-set-element-editor.js';
import './report-control-element-editor.js';
import '../foundation/components/oscd-filtered-list.js';
import type { OscdFilteredList } from '../foundation/components/oscd-filtered-list.js';
export declare class ReportControlEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    selectedReportControl?: Element;
    selectedDataSet?: Element | null;
    selectionList: OscdFilteredList;
    selectReportControlButton: Button;
    /** Resets selected Report and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private selectReportControl;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
