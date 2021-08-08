import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { WidgetsComponent } from './components/main-dashboard/widgets/widgets.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { BotStatsDialogComponent } from './components/table-bots/bot-stats-dialog/bot-stats-dialog.component';
import { TableBotsComponent } from './components/table-bots/table-bots.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './components/account/about/about.component';
import { SettingsComponent } from './components/account/settings/settings.component';
import { CreateBotComponent } from './components/create-bot/create-bot.component';
import { AddModeyToAccountComponent } from './components/main-dashboard/add-modey-to-account/add-modey-to-account.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { TableBotsInterceptor } from './components/table-bots/table-bots.interceptor';
import { CreateBotInterceptor } from './components/create-bot/create.bot.interceptor';
import { SettingsInterceptor } from './components/account/settings/settings.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainDashboardComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    CreateBotComponent,
    TableBotsComponent,
    WidgetsComponent,
    AddModeyToAccountComponent,
    BotStatsDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    routing,

    MDBBootstrapModule.forRoot(),
    // MATERIAL
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [AddModeyToAccountComponent, BotStatsDialogComponent],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CreateBotInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TableBotsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SettingsInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
