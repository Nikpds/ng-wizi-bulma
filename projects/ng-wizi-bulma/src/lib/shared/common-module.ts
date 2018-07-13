import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OVERLAY_CONTAINER_PROVIDER} from './overlay/overlay-container';
import {DOM_SERVICE_PROVIDER} from './dom/dom.service';
import {NwbDebounceDirective, NwbToolTipDirective} from './directives';
import {NwbSpinnerComponent} from './components';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    OVERLAY_CONTAINER_PROVIDER,
    DOM_SERVICE_PROVIDER,
  ],
  entryComponents: [],
  declarations: [NwbSpinnerComponent, NwbDebounceDirective, NwbToolTipDirective],
  exports: [NwbSpinnerComponent, NwbDebounceDirective, NwbToolTipDirective],
})
export class NwbCommonModule {
}
