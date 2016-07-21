PRAGMA foreign_keys = "ON";

insert into login(useremail, password) values ("abc@email.com","abc");
insert into login(useremail, password) values ("pqr@email.com","pqr");

insert into topics (name,duration,useremail,requiredParticipant, questionLocation, status) values ("GK",30,"abc@email.com", 10, "quiz.json","open");
insert into topics (name,duration,useremail,requiredParticipant, questionLocation, status) values ("SS",20,"pqr@email.com",10, "quiz.json","open");
insert into topics (name,duration,useremail,requiredParticipant, questionLocation, status) values ("Language",15,"pqr@email.com",10, "quiz.json","open");
insert into topics (name,duration,useremail,requiredParticipant, questionLocation, status) values ("India",15,"pqr@email.com",10, "quiz.json","closed");
insert into participate(useremail, quizId) values ("abc@email.com",2);
