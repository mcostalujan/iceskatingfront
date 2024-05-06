import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
  './dashboard.component.css',
  '../../../assets/css/style.css',
  '../../../assets/css/bootstrap.css',
  '../../../assets/css/dark.css',
  '../../../assets/css/font-icons.css',
  '../../../assets/css/animate.css',
  '../../../assets/css/magnific-popup.css',
  '../../../assets/css/custom.css',
  '../../../assets/include/rs-plugin/css/settings.css',
  '../../../assets/include/rs-plugin/css/layers.css',
  '../../../assets/include/rs-plugin/css/navigation.css',
],
})
export class DashboardComponent {

  jQuery: any;

  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}


  async openModal() {
    return await this.modalComponent.open();
  }
}
