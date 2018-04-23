DROP TABLE IF EXISTS company,billing,subscribers;

CREATE TABLE IF NOT EXISTS company(
  co_id INT NOT NULL AUTO_INCREMENT,
  co_corporateNumber INT NOT NULL,
  co_name varchar(64),
  co_telephone INT NOT NULL,
  co_address varchar(200),
  co_postcode varchar(20),
  co_city varchar(100),
  PRIMARY KEY (co_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS billing (
  bi_id INT NOT NULL AUTO_INCREMENT,
  bi_address varchar(200) DEFAULT NULL,
  bi_postcode varchar(20),
  bi_city varchar(200),
  co_id INT,
  PRIMARY KEY (bi_id),
  FOREIGN KEY (co_id) REFERENCES company(co_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS subscribers(
  su_id INT NOT NULL AUTO_INCREMENT,
  su_socialnumber INT NOT NULL,
  su_firstname varchar(64),
  su_lastname varchar(64),
  su_address varchar(200),
  su_postcode varchar(20),
  su_city varchar(100),
  su_subscribtion_number INT,
  PRIMARY KEY (su_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;
