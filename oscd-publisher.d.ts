import { LitElement } from 'lit';
import '@material/mwc-radio';
import '@material/mwc-formfield';
import './editors/report-control-editor.js';
import './editors/gse-control-editor.js';
import './editors/data-set-editor.js';
import './editors/sampled-value-control-editor.js';
/** An editor [[`plugin`]] to configure `Report`, `GOOSE`, `SampledValue` control blocks and its `DataSet` */
export default class PublisherPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    private publisherType;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
