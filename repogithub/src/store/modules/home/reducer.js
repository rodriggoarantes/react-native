import produce from 'immer';

export default function cart(state, action) {
  switch (action.type) {
    case '@home/PLUS': {
      return produce(state, draft => {
        draft.count = Number(action.count);
      });
    }
    default:
      return state || [];
  }
}
