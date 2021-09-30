import store from './store';
import * as actions from './actions';


const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(
  actions.bugAdded("Bug numero 001")
);

store.dispatch(
  actions.bugAdded("Bug do agente 007")
);

store.dispatch(
  actions.bugResolved(1, true)
)

unsubscribe();

store.dispatch(
  actions.bugRemoved(1)
);

console.log(store.getState());