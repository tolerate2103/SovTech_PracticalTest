import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthGuard } from './framework/authorisation/auth.guard';
import { JwtInterceptor } from './framework/authorisation/jwt.interceptor';
import { AuthService } from './framework/authorisation/auth.service';
import { DataService } from './framework/services/data.service';
import { ConfigService } from './framework/services/config.service';
import { RoleGuard } from './framework/authorisation/role.guard';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

export function initApp(configService: ConfigService): (() => Promise<boolean>) {
  return configService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PeopleListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'people-list', component: PeopleListComponent },
      { path: 'category-list', component: CategoryListComponent }

    ])
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ConfigService],
      multi: true
    },
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID, useValue: "en-ZA"
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
