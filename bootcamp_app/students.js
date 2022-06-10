const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name, cohorts.name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
LIMIT 5;
`)
.then(res => {
  console.log(res.rows)
  // res.rows.forEach(user => {
  //   console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohorts.name} cohort`)
  // })
})
.catch(err => console.error('query error', err.stack));