import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list-item';
import '../foundation/components/oscd-textfield.js';
import type { OscdTextfield } from '../foundation/components/oscd-textfield.js';
export declare class DataSetElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element | null;
    private get name();
    private get desc();
    private someInputDiff;
    private onInputChange;
    private saveChanges;
    inputs?: OscdTextfield[];
    private renderHeader;
    private renderContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
