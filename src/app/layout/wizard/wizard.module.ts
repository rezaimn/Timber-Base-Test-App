import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardComponent} from './wizard.component';
import {BasicComponent} from './basic/basic.component';
import {EducationComponent} from './education/education.component';
import {WorkExperiencesComponent} from './work-experiences/work-experiences.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectComponent} from './project/project.component';
import {ExportComponent} from './export/export.component';
import {SharedModule} from '../../shared/modules/shared.module';
import {WizardRoutingModule} from './wizard-routing.module';


@NgModule({
  declarations: [
    WizardComponent,
    BasicComponent, EducationComponent,
    WorkExperiencesComponent,
    SkillsComponent,
    ProjectComponent,
    ExportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WizardRoutingModule
  ]
})
export class WizardModule {
}
