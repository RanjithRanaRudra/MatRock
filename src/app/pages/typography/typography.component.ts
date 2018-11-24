import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  public context2 = '<span class="mat-display-4">Display 4</span>';
  public context3 = '<span class="mat-display-3">Display 3</span>';
  public context4 = '<span class="mat-display-2">Display 2</span>';
  public context5 = '<span class="mat-display-1">Display 1</span>';
  public context12 = '<h4>Display 4</h4>';
  public context13 = '<h3>Display 3</h3>';
  public context14 = '<h2>Display 2</h2>';
  public context15 = '<h1>Display 1</h1>';
  constructor() { }

  ngOnInit() {
  }

}
