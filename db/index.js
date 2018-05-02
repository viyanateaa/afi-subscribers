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


export const selectSubscriberByID = (id) => {
  return new Promise((resolve, reject) => {
    let sql =  `SELECT * FROM subscribers WHERE su_id = '${id}';`
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};



export const createCompany = ({ co_corporateNumber, co_name, co_telephone, co_address, co_postcode, co_city }) => {
  const id = uuidv1()
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
    console.log(sql)

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

export const createBilling = ({ bi_address, bi_postcode, bi_city, co_id }) => {
  const id = uuidv1()
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO billing(" +
      "bi_id," +
      "bi_address," +
      "bi_postcode," +
      "bi_city," +
      "co_id" +
      ") VALUES" +
      "('" +
      id + "', '" +
      bi_address + "','" +
      bi_postcode + "', '" +
      bi_city + "', '" +
      co_id + "');"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve({
        bi_id: id,
        bi_address: bi_address,
        bi_postcode: bi_postcode,
        bi_city: bi_city,
        co_id: co_id
      });
    });
  });
}



export const createSubscriber = ({
  su_socialnumber,
  su_firstname,
  su_lastname,
  su_address,
  su_postcode,
  su_city,
  su_subscribtion_number
}) => {
  const id = uuidv1()
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO subscribers(" +
      "su_id," +
      "su_socialnumber," +
      "su_firstname," +
      "su_lastname," +
      "su_address," +
      "su_postcode," +
      "su_city," +
      "su_subscribtion_number" +
      ") VALUES" +
      "('" +
      id + "', '" +
      su_socialnumber + "','" +
      su_firstname + "', '" +
      su_lastname + "', '" +
      su_address + "', '" +
      su_postcode + "', '" +
      su_city + "', '" +
      su_subscribtion_number + "');"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve({
        su_id: id,
        su_socialnumber: su_socialnumber,
        su_firstname: su_firstname,
        su_lastname: su_lastname,
        su_address: su_address,
        su_postcode: su_postcode,
        su_city: su_city,
        su_subscribtion_number: su_subscribtion_number,
      });
    });
  });
}
