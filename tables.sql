DROP TABLE IF EXISTS company,billing;

CREATE TABLE IF NOT EXISTS billing (
  bi_id INT NOT NULL AUTO_INCREMENT,
  bi_address varchar(200) DEFAULT NULL,
  bi_postcode varchar(20),
  bi_city varchar(200),
  PRIMARY KEY (bi_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS company(
  co_id INT NOT NULL AUTO_INCREMENT,
  co_corporateNumber INT NOT NULL,
  co_name varchar(64),
  co_telephone INT NOT NULL,
  co_address varchar(200),
  co_postcode varchar(20),
  co_city varchar(100),
  bi_id  INT,
  PRIMARY KEY (co_id),
  FOREIGN KEY (bi_id) REFERENCES billing(bi_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;
