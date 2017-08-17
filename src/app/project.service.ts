import {Injectable} from '@angular/core';
import {Project} from './project';

@Injectable()
export class ProjectService {

  lastId = 0;

  projects: Project[] = [];

  constructor() {
  }

  // Simulate POST
  addProject(project: Project): ProjectService {
    if (!project.id) {
        project.id = ++this.lastId;
    }
    this.projects.push(project);
    return this;
  }

  getAllProjects(): Project[] {
    return this.projects;
  }


}

