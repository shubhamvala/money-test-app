import { Epic, combineEpics } from 'redux-observable'
import { concat, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { container } from 'tsyringe'

import { AppDependencies } from '@di'
import { SignInUseCase } from '@domain'

import {
  AuthenticationEpicActions,
  signIn,
  signInBegin,
  signInFailed,
  signInLocally,
  signInLocallyFailed,
  signInLocallySuccess,
  signInSuccess,
} from '../actions'

const signInEpic$: Epic<AuthenticationEpicActions> = action$ =>
  action$.pipe(
    filter(signIn.match),
    switchMap(action => {
      const useCase = container.resolve<SignInUseCase>(
        AppDependencies.StoreContainer,
      )
      return concat(
        of(signInBegin()),
        useCase.call(action.payload).pipe(
          map(signInSuccess),
          catchError(() => of(signInFailed())),
        ),
      )
    }),
  )
const signInLocallyEpic$: Epic<AuthenticationEpicActions> = action$ =>
  action$.pipe(
    filter(signInLocally.match),
    switchMap(() => {
      const useCase = container.resolve<SignInUseCase>(
        AppDependencies.SignInUseCase,
      )
      return useCase.call().pipe(
        map(signInLocallySuccess),
        catchError(() => of(signInLocallyFailed())),
      )
    }),
  )
export const authenticationEpic = combineEpics(signInEpic$, signInLocallyEpic$)
