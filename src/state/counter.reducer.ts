import { createReducer, on } from "@ngrx/store";
import { countLove, countLike } from "./counter.action";

export interface CounterState{
        likeCount:number
        loveCount:number
}

  const initialState: CounterState = {
        likeCount: 1,
        loveCount: 1
      
    };

export const CounterReducer =createReducer(initialState,
    on(countLike,state=>({...state,likeCount:state.likeCount+1})),
    on(countLove,state=>({...state,loveCount:state.loveCount+1})
))
