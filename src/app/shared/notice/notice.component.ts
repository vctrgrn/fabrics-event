import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  isOpen =  false;
  noticeItem = [
    {
      'titre': '1',
      "class": 'un',
      'text': 'Sélectionnez le ou les produits que vous désirez.'
    }, 
    {
      'titre': '2',
      "class": 'deux',
      'text': 'Sélectionnez ensuite la ou les couleurs souhaitées.'
    }, 
    {
      'titre': '3',
      "class": 'trois',
      'text': "MLe récapitulatif de votre devis s'affichera, et vous pourrez éditer la quantité voulue du produit."
    }, 
    {
      'titre': '4',
      "class": 'quatre',
      'text': 'Validez votre devis. Vous aurez la possibilité de laisser un message pour accompagner celui-ci.'
    }

  ]

  constructor() { }

  ngOnInit(): void {
    this.recap();
  }

  afficherNotice() {
    this.isOpen = !this.isOpen;
  }

  recap(){

      let curOpen;

      $(document).ready(function () {
        curOpen = $('.step')[0];

        $('.next-btn').on('click', function () {
          let cur = $(this).closest('.step');
          let next = $(cur).next();
          $(cur).addClass('minimized');
          setTimeout(function () {
            $(next).removeClass('minimized');
            curOpen = $(next);
          }, 400);
        });

        $('.close-btn').on('click', function () {
          let cur = $(this).closest('.step');
          $(cur).addClass('minimized');
          curOpen = null;
        });

        $('.step .step-content').on('click', function (e) {
          e.stopPropagation();
        });

        $('.step').on('click', function () {
          if (!$(this).hasClass("minimized")) {
            curOpen = null;
            $(this).addClass('minimized');
          } else {
            let next = $(this);
            if (curOpen === null) {
              curOpen = next;
              $(curOpen).removeClass('minimized');
            } else {
              $(curOpen).addClass('minimized');
              setTimeout(function () {
                $(next).removeClass('minimized');
                curOpen = $(next);
              }, 300);
            }
          }
        });
      });
  }
}
