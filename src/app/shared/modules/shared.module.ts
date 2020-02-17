import {NgModule} from '@angular/core';
import {HttpService} from '../services/http.service';
import {AlertMessageComponent} from '../components/alert-message/alert-message.component';
import {CommonModule} from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  /**
   * Here we can add modules that we want to share.
   */
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatExpansionModule,
    CdkTableModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    TranslateModule.forChild(),
    FlexLayoutModule,
    NgxExtendedPdfViewerModule
  ],
  /**
   * Here we can add components, pipes and directives that we want to share.
   */
  declarations: [
    AlertMessageComponent,
  ],
  /**
   * Here we can add modules, components, pipes and directives that we want to share.
   */
  exports: [
    FormsModule,
    AlertMessageComponent,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatExpansionModule,
    CdkTableModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    TranslateModule,
    FlexLayoutModule,
    NgxExtendedPdfViewerModule

  ],
  entryComponents: [],
  /**
   * Here we can add services that we want to share.
   */
  providers: [
    HttpService,
  ]
})

/**
 * we added some modules,services,pipes and components here to share them with other modules.
 */
export class SharedModule {
}
