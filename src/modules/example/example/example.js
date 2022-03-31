import { LightningElement , api, wire, track} from 'lwc';
// import { getRecord } from 'lightning/uiRecordApi';

export default class HelloWorldApp extends LightningElement {

    title = "Welcome to Lightning Web Components!";
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;

        console.log('clickedButtonLabel: ' + this.clickedButtonLabel);
    }
}
