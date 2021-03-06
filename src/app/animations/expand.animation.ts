import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * animation is triggered when element is rendered
 * @example
 * <div *ngIf="show" @expandOnRender></div>
 *
 * @see expandOnStateChange
 */
export const expandOnRender =
  trigger('expandOnRender', [
    transition(':enter', [
      style({ height: '0px', minHeight: '0' }),
      animate(
        '225ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        style({ height: '*' })
      )
    ]),
    transition(':leave', [
      style({ height: '*', overflow: 'hidden' }),
      animate(
        '225ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        style({ height: '0px', minHeight: '0' })
      )
    ])
  ]);


/**
 * animation is triggered when state changes between 'expanded' <=> 'collapsed'
 * @example
 * <div [@expandOnStateChange]="show ? 'expanded' : 'collapsed'"></div>
 *
 * @see expandOnStateChange
 */
export const expandOnStateChange =
  trigger('expandOnStateChange', [
    state('collapsed', style({ height: '0px', minHeight: '0' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
  ]);
