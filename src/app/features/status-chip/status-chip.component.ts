import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-status-chip',
  templateUrl: './status-chip.component.html',
  styleUrls: ['./status-chip.component.scss'],
  host: {
    '[class.active]': 'active'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusChipComponent {
  @Input() active?: boolean;
}
