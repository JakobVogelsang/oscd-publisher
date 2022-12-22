/* eslint-disable import/no-extraneous-dependencies */
import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import type { Button } from '@material/mwc-button';
import type { ListItem } from '@material/mwc-list/mwc-list-item';

import { newEditEvent } from '@openscd/open-scd-core';

import './data-set-element-editor.js';
import '../foundation/components/oscd-filtered-list.js';
import './sampled-value-control-element-editor.js';
import type { OscdFilteredList } from '../foundation/components/oscd-filtered-list.js';

import { styles, updateElementReference } from '../foundation.js';
import { selector } from '../foundation/identities/selector.js';
import { identity } from '../foundation/identities/identity.js';
import { smvIcon } from '../foundation/icons.js';
import { removeControlBlock } from '../foundation/utils/controlBlocks.js';

@customElement('sampled-value-control-editor')
export class SampledValueControlEditor extends LitElement {
  /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  @state()
  selectedSampledValueControl?: Element;

  @state()
  selectedDataSet?: Element | null;

  @query('.selectionlist') selectionList!: OscdFilteredList;

  @query('mwc-button') selectSampledValueControlButton!: Button;

  /** Resets selected SMV and its DataSet, if not existing in new doc */
  update(props: Map<string | number | symbol, unknown>): void {
    if (props.has('doc') && this.selectedSampledValueControl) {
      const newSampledValueControl = updateElementReference(
        this.doc,
        this.selectedSampledValueControl
      );

      this.selectedSampledValueControl = newSampledValueControl ?? undefined;
      this.selectedDataSet = this.selectedSampledValueControl
        ? updateElementReference(this.doc, this.selectedDataSet!)
        : undefined;

      if (
        !newSampledValueControl &&
        this.selectionList &&
        this.selectionList.selected
      )
        (this.selectionList.selected as ListItem).selected = false;
    }

    super.update(props);
  }

  private selectSMVControl(evt: Event): void {
    const id = ((evt.target as OscdFilteredList).selected as ListItem).value;
    const smvControl = this.doc.querySelector(
      selector('SampledValueControl', id)
    );
    if (!smvControl) return;

    this.selectedSampledValueControl = smvControl;

    if (smvControl) {
      this.selectedDataSet =
        smvControl.parentElement?.querySelector(
          `DataSet[name="${smvControl.getAttribute('datSet')}"]`
        ) ?? null;
      (evt.target as OscdFilteredList).classList.add('hidden');
      this.selectSampledValueControlButton.classList.remove('hidden');
    }
  }

  private renderElementEditorContainer(): TemplateResult {
    if (this.selectedSampledValueControl !== undefined)
      return html`<div class="elementeditorcontainer">
        <data-set-element-editor
          .element=${this.selectedDataSet!}
        ></data-set-element-editor>
        <sampled-value-control-element-editor
          .doc=${this.doc}
          .element=${this.selectedSampledValueControl}
        ></sampled-value-control-element-editor>
      </div>`;

    return html``;
  }

  private renderSelectionList(): TemplateResult {
    return html`<oscd-filtered-list
      activatable
      @action=${this.selectSMVControl}
      class="selectionlist"
      >${Array.from(this.doc.querySelectorAll('IED')).flatMap(ied => {
        const ieditem = html`<mwc-list-item
            class="listitem header"
            noninteractive
            graphic="icon"
            value="${Array.from(ied.querySelectorAll('SampledValueControl'))
              .map(element => {
                const id = identity(element) as string;
                return typeof id === 'string' ? id : '';
              })
              .join(' ')}"
          >
            <span>${ied.getAttribute('name')}</span>
            <mwc-icon slot="graphic">developer_board</mwc-icon>
          </mwc-list-item>
          <li divider role="separator"></li>`;

        const sampledValueControls = Array.from(
          ied.querySelectorAll('SampledValueControl')
        ).map(
          smvControl =>
            html`<mwc-list-item
              hasMeta
              twoline
              value="${identity(smvControl)}"
              graphic="icon"
              ><span>${smvControl.getAttribute('name')}</span
              ><span slot="secondary">${identity(smvControl)}</span>
              <span slot="meta"
                ><mwc-icon-button
                  icon="delete"
                  @click=${() => {
                    this.dispatchEvent(
                      newEditEvent(removeControlBlock(smvControl))
                    );
                    this.requestUpdate();
                  }}
                ></mwc-icon-button>
              </span>
              <mwc-icon slot="graphic">${smvIcon}</mwc-icon>
            </mwc-list-item>`
        );

        return [ieditem, ...sampledValueControls];
      })}</oscd-filtered-list
    >`;
  }

  private renderToggleButton(): TemplateResult {
    return html`<mwc-button
      outlined
      label="'publisher.selectbutton', { type: 'SMV' })}"
      @click=${() => {
        this.selectionList.classList.remove('hidden');
        this.selectSampledValueControlButton.classList.add('hidden');
      }}
    ></mwc-button>`;
  }

  render(): TemplateResult {
    return html`${this.renderToggleButton()}
      <div class="content">
        ${this.renderSelectionList()}${this.renderElementEditorContainer()}
      </div>`;
  }

  static styles = css`
    ${styles}

    .elementeditorcontainer {
      flex: 65%;
      margin: 4px 8px 4px 4px;
      background-color: var(--mdc-theme-surface);
      overflow-y: scroll;
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      grid-template-columns: repeat(3, 1fr);
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    data-set-element-editor {
      grid-column: 1 / 2;
    }

    sampled-value-control-element-editor {
      grid-column: 2 / 4;
    }

    @media (max-width: 950px) {
      .elementeditorcontainer {
        display: block;
      }
    }
  `;
}
