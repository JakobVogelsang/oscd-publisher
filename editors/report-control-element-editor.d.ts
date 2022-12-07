import { LitElement, TemplateResult } from 'lit';
import '../foundation/components/oscd-checkbox.js';
import '../foundation/components/oscd-textfield.js';
import '../foundation/components/oscd-select.js';
export declare class ReportControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    private renderOptFieldsContent;
    private renderTrgOpsContent;
    private renderChildElements;
    private renderReportControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
