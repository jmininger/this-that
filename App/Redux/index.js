import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    question: require('./QuestionFormRedux').reducer,
    search: require('./SearchRedux').reducer,
    feed: require('./FeedRedux').reducer
    myQuestions: require('./MyQuestionsRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}

//
