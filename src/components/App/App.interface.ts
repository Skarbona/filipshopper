import * as appEpics from "../../store/app/epic";

export interface IStoreAppProps { }

export interface IDispatchAppProps {
  initProductData: typeof appEpics.initProductData,
  initTranslations: typeof appEpics.initTranslations,
}

export interface IOwnAppProps { }

export type IAppProps = IStoreAppProps & IDispatchAppProps & IOwnAppProps;

