import { LitElement, TemplateResult } from 'lit';
import '../foundation/components/wizard-checkbox.js';
import '../foundation/components/wizard-textfield.js';
import '../foundation/components/wizard-select.js';
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
