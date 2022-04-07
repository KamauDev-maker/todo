import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal []=[
   new Goal(1,'Watch Finding Nemo','Find an online version and watch Merlin find his son',new Date (2022,3,15)),
   new Goal (2,'Buy Butter','I have to buy butter for my Son',new Date (2022,4,17)),
   new Goal (3, 'Get Dog Food','Pupper likes expensive snacks',new Date (2022,8,22)),
   new Goal (4,'Solve Math Homework','Damn Math',new Date (2023,0,18)),
   new Goal (5,'Get new phone Case','Diana has her Birthday coming soon',new Date (2022,9,22)),
   new Goal (6,'Plot my World domination Plan','Cause am an Evil overload',new Date (2022,4,17)),
  ];
  toggleDetails(index:number){
    this.goals [index].showDescription = !this.goals [index].showDescription
  }
  completeGoal(isComplete:boolean,index:number){
    if (isComplete){
      this.goals.splice(index,1);
    }
  }

  deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
