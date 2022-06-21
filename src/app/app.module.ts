import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxBadgeModule, IgxAvatarModule, IgxCalendarModule, IgxCardModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    DashboardsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxBadgeModule,
    IgxAvatarModule,
    IgxCalendarModule,
    FormsModule,
    IgxCardModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
