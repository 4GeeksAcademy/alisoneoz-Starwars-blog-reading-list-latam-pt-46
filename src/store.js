export const initialStore=()=>{
  return{
   favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'ADD_FAVORITE':     
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    default:
      throw Error('Unknown action.');
  }    
}
