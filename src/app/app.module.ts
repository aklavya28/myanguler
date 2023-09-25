
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummeryPipe } from './pipe/summery.pipe';
import { FavritComponent } from './favrit.component';
import { HomeComponent } from './home/home.component';
import { BootstarpPanelComponent } from './bootstarp-panel/bootstarp-panel.component';
import { SwitchComponent } from './switch.component';
import { ClassbindingComponent } from './classbinding.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingUpFormsComponent } from './sing-up-forms/sing-up-forms.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavritComponent,
    CourseComponent,
    SummeryPipe,
    HomeComponent,
    BootstarpPanelComponent,
    SwitchComponent,
    ClassbindingComponent,
    ContactFormComponent,
    SingUpFormsComponent,
    PostsComponent,
    PostDetailComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    CourseService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
