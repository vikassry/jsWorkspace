npm install
mkdir data && node scripts/initialize_db.js data/quiz.db 
mkdir tests/data
node scripts/initialize_db.js tests/data/quiz.db
sqlite3 tests/data/quiz.db <scripts/fill_sample_data.sql 
cp tests/data/quiz.db tests/data/quiz.db.backup