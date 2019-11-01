import { ITranslations } from "../../../../store/app/app.types";

export interface ICartSummaryProps {
  currency: ITranslations["currency"],
  messages: ITranslations["messages"],
  total: number,
}