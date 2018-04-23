let mysql = require('mysql');
const uuidv1 = require('uuid/v1');


let con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "afi-subscribers"
});


con.connect(function(err) {
  if (err) throw err;
});

export const selectAll = (table) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM " + table + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const createCompany = ({ co_corporateNumber, co_name, co_telephone, co_address, co_postcode, co_city }) => {
  const id =uuidv1()
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO company(" +
      "co_id," +
      "co_corporateNumber," +
      "co_name," +
      "co_telephone," +
      "co_address," +
      "co_postcode," +
      "co_city) VALUES" +
      "('" +
      id + "', '" +
      co_corporateNumber + "', '" +
      co_name + "', '" +
      co_telephone + "', '" +
      co_address + "', '" +
      co_postcode + "', '" +
      co_city + "');"

    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve({
        co_id: id,
        co_corporateNumber: co_corporateNumber,
        co_name: co_name,
        co_telephone: co_telephone,
        co_address: co_address,
        co_postcode: co_postcode,
        co_city: co_city
      });
    });
  });

}
