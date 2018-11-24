import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper-classes',
  templateUrl: './helper-classes.component.html',
  styleUrls: ['./helper-classes.component.scss']
})
export class HelperClassesComponent implements OnInit {
    public context1 = '<span class="p-0">No padding</span>';
    public context2 = '<span class="p-4">4px padding</span>';
    public context3 = '<span class="pt-0">padding from top</span>';
    public context4 = '<span class="pr-0">padding from right</span>';
    public context5 = '<span class="pb-0">padding from bottom</span>';
    public context6 = '<span class="pl-0">padding from left</span>';
    public context7 = '<span class="px-0">padding from left and right</span>';
    public context8 = '<span class="py-0">padding from top and bottom</span>';
    public context9 = '<span class="pt-4">padding from top</span>';
    public context10 = '<span class="pr-4">padding from right</span>';
    public context11 = '<span class="pb-4">padding from bottom</span>';
    public context12 = '<span class="pl-4">padding from left</span>';
    public context13 = '<span class="px-4">padding from left and right</span>';
    public context14 = '<span class="py-4">padding from top and bottom</span>';
    public context15 = '<span class="pt-0">padding from top</span>';
    public context27 = '<span class="m-0">No margin</span>';
    public context28 = '<span class="m-4">4px margin</span>';
    public context29 = '<span class="mt-0">margin from top</span>';
    public context16 = '<span class="mr-0">margin from right</span>';
    public context17 = '<span class="mb-0">margin from bottom</span>';
    public context18 = '<span class="ml-0">margin from left</span>';
    public context19 = '<span class="mx-0">margin from left and right</span>';
    public context20 = '<span class="my-0">margin from top and bottom</span>';
    public context21 = '<span class="mt-4">margin from top</span>';
    public context22 = '<span class="mr-4">margin from right</span>';
    public context23 = '<span class="mb-4">margin from bottom</span>';
    public context24 = '<span class="ml-4">margin from left</span>';
    public context25 = '<span class="mx-4">margin from left and right</span>';
    public context26 = '<span class="my-4">margin from top and bottom</span>';
    public context30 = '<span class="w-0">0px width</span>';
    public context31 = '<span class="w-100">100px width</span>';
    public context32 = '<span class="w-25-p">25% width</span>';
    public context33 = '<span class="w-100-p">100% width</span>';
    public context34 = '<span class="h-0">0px height</span>';
    public context35 = '<span class="h-100">100px height</span>';
    public context36 = '<span class="h-25-p">25% height</span>';
    public context37 = '<span class="h-100-p">100% height</span>';
  constructor() { }

  ngOnInit() {
  }

}
