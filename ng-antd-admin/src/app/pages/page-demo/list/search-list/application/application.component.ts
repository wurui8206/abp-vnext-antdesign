import { NgStyle, DecimalPipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WaterMarkComponent } from '@shared/components/water-mark/water-mark.component';
import { NumberLoopPipe } from '@shared/pipes/number-loop.pipe';
import { SearchListStoreService } from '@store/biz-store-service/search-list/search-list-store.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NzCardModule,
    WaterMarkComponent,
    NzGridModule,
    NgStyle,
    NzTagModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    NzSelectModule,
    FormsModule,
    NzAvatarModule,
    NzTypographyModule,
    NzToolTipModule,
    NzDropDownModule,
    NzMenuModule,
    DecimalPipe,
    NumberLoopPipe
  ]
})
export class ApplicationComponent {
  expanded = false;
  searchInfo = {
    owner: ['2', '3'],
    author: null,
    like: null
  };
  allSelFlag = false;
  tagArray = [
    { name: '类目一', isChecked: false },
    { name: '类目二', isChecked: false },
    { name: '类目三', isChecked: false },
    { name: '类目四', isChecked: false },
    { name: '类目五', isChecked: false },
    { name: '类目六', isChecked: false },
    { name: '类目七', isChecked: false },
    { name: '类目八', isChecked: false },
    { name: '类目九', isChecked: false },
    { name: '类目十', isChecked: false },
    { name: '类目十一', isChecked: false },
    { name: '类目十二', isChecked: false }
  ];
  private searchListService = inject(SearchListStoreService);

  constructor() {
    this._onReuseInit();
  }

  allSel(): void {
    this.allSelFlag = !this.allSelFlag;
    this.tagArray.forEach(item => {
      item.isChecked = this.allSelFlag;
    });
    this.tagArray = [...this.tagArray];
  }

  _onReuseInit(): void {
    this.searchListService.setCurrentSearchListComponentStore('搜索列表（应用）');
  }
}