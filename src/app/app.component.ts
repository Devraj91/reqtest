import { Component } from '@angular/core';
import {Project} from './project';
import {ProjectService} from './project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectService]
})
export class AppComponent {
  newProject: Project = new Project();

projects_list = [
    {value: 'New Project'},
    {value: 'New Project Template'},
  ];

  bases = [
    {value: '7th June template'},
    {value: 'English template'},
    {value: 'Helen\'s template'}
  ];

  constructor(private projectService: ProjectService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }
  addProject() {
    this.projectService.addProject(this.newProject);
    this.newProject = new Project();
    console.log('pushing project');
  }

  get projects() {
    return this.projectService.getAllProjects();
  }

}
