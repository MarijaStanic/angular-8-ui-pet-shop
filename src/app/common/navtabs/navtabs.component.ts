import { Component, Input } from "@angular/core";

@Component({
  selector: "navtabs",
  templateUrl: "./navtabs.component.html",
  styleUrls: ["./navtabs.component.css"]
})
export class NavtabsComponent {
  @Input() tabs: String[];

  private currentStep: number = 0;

  isCurrentStep(tab: string): boolean {
    return this.tabs.indexOf(tab) === this.currentStep;
  }

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  isLastStep(): boolean {
    return this.currentStep === this.tabs.length - 1;
  }

  previous() {
    this.currentStep -= 1;
  }

  next() {
    this.currentStep += 1;
  }

  getStepLabel(): String {
    return this.isLastStep() ? "Submit" : "Next";
  }

  setCurrentStep(step) {
		this.currentStep = step;
	}
}
