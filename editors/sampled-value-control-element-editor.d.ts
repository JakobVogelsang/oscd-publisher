import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-formfield';
import '@material/mwc-checkbox';
import '../foundation/components/wizard-checkbox.js';
import '../foundation/components/wizard-select.js';
import '../foundation/components/wizard-textfield.js';
export declare class SampledValueControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    get sMV(): Element | null;
    private renderSmvContent;
    private renderSmvOptsContent;
    private renderOtherElements;
    private renderSmvControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
