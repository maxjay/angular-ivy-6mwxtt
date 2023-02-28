import { createAction, props } from '@ngrx/store';

export const closeDialog = createAction(
  '[Dialog] Close Dialog',
  props<{ error: string }>()
);
