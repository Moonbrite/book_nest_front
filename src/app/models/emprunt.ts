export class Emprunt {
  userId?: number;
  livre_id?: number;
  date_emprunt?: string;
  date_retour?: string;
  statut?: string;

  constructor(userId?:number ,livre_id?: number, date_emprunt?: string, date_retour?: string, statut?: string ) {
    this.userId = userId;
    this.livre_id = livre_id;
    this.date_emprunt = date_emprunt;
    this.date_retour = date_retour;
    this.statut = statut;
  }
}
