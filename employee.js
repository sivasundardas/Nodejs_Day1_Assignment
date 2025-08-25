import mysql from "mysql2/promise";

async function main() {

  const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",        
    password: "dascme@123",
    database: "employeeDB"
  });
  console.log(" MySQL connected");


  await conn.execute(
    "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)",
    ["Das", "das@example.com", "IT"]
  );

  const [rows] = await conn.execute("SELECT * FROM employees");
  console.log("Employees:", rows);

  await conn.execute(
    "UPDATE employees SET department=? WHERE name=?",
    ["HR", "Das"]
  );

  await conn.execute("DELETE FROM employees WHERE name=?", ["Das"]);

  await conn.end();
  console.log("Connection closed");
}

main().catch(err => console.error("Error:", err));
