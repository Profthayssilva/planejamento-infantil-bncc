export type Skill={code:string;field:string;knowledge:string;age:string;description:string};
export type Attachment={id:string;name:string;url:string;type:string};
export type DayPlan={date:string;content:string;welcome:string;rights:string[];skills:string[];methodology:string;resources:string;evaluation:string;attachments:Attachment[]};
export type Plan={id:string;title:string;className:string;startDate:string;endDate:string;status:'rascunho'|'em andamento'|'concluído';institution:string;director:string;coordinator:string;teachers:string;days:DayPlan[];updatedAt:string};
