import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube/cube.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CubeComponent, TestComponent],
  exports: [CubeComponent, TestComponent],
})
export class ThreeJsUiModule {}
