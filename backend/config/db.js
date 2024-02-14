const { Pool } = require('pg');

// Replace the following connection configuration with your PostgreSQL credentials
const pool = new Pool({
  user:"cointab_gvg5_user",
  host: "dpg-cn6969a1hbls73c82jvg-a.singapore-postgres.render.com",
  database: 'cointab_gvg5',
  password: "iumtR9tZsvgovA4MyZq3VGkO1jE7pY5X",
  port: 5432, // Default PostgreSQL port
  ssl:true
});

// Example query


module.exports={pool}
